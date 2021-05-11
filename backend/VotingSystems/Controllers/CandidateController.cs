using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VotingSystems.Models;

namespace VotingSystems.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly VotingDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public CandidateController(VotingDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Candidate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidate>>> GetCandidates()
        {
            return await _context.Candidates
                .Select(x => new Candidate()
                {
                    CandidateID = x.CandidateID,
                    CandidateNo = x.CandidateNo,
                    CandidateName = x.CandidateName,
                    District_ID = x.District_ID,
                    Party_ID = x.Party_ID,
                    Image = x.Image,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .ToListAsync();
        }

        // GET: api/Candidate/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidate>> GetCandidate(int id)
        {
            var candidate = await _context.Candidates.FindAsync(id);

            candidate.ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, candidate.Image);

            if (candidate == null)
            {
                return NotFound();
            }

            return candidate;
        }

        //GET: api/Candidate/GetByParty/5
        [HttpGet("GetByParty/{party}/{district}")]
        public async Task<ActionResult<IEnumerable<Candidate>>> GetByParty(int party, int district)
        {
            //return Ok();

            return await _context.Candidates
                .Where(x => (x.Party_ID == party) && (x.District_ID == district))
                .Select(x => new Candidate()
                {
                    CandidateID = x.CandidateID,
                    CandidateNo = x.CandidateNo,
                    CandidateName = x.CandidateName,
                    District_ID = x.District_ID,
                    Party_ID = x.Party_ID,
                    Image = x.Image,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .ToListAsync();
        }

        // PUT: api/Candidate/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidate(int id, [FromForm] Candidate candidate)
        {
            candidate.CandidateID = id;

            _context.Entry(candidate).State = EntityState.Modified;

            if (candidate.ImageFile != null)
            {
                DeleteImage(candidate.Image);
                candidate.Image = await SaveImage(candidate.ImageFile);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Candidate
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Candidate>> PostCandidate([FromForm] Candidate candidate)
        {
            candidate.Image = await SaveImage(candidate.ImageFile);
            _context.Candidates.Add(candidate);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetCandidate", new { id = candidate.CandidateID }, candidate);
            return StatusCode(201);
        }

        // DELETE: api/Candidate/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidate>> DeleteCandidate(int id)
        {
            var candidate = await _context.Candidates.FindAsync(id);
            if (candidate == null)
            {
                return NotFound();
            }

            _context.Candidates.Remove(candidate);
            await _context.SaveChangesAsync();

            return candidate;
        }

        private bool CandidateExists(int id)
        {
            return _context.Candidates.Any(e => e.CandidateID == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }
        }
    }
}
