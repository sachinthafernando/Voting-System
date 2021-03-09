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
    public class PartyController : ControllerBase
    {
        private readonly VotingDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public PartyController(VotingDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Party
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Party>>> GetParties()
        {
            return await _context.Parties
                .Select(x => new Party()
                {
                    PartyID = x.PartyID,
                    PartyName = x.PartyName,
                    PartyVotecount = x.PartyVotecount,
                    Color = x.Color,
                    Logo = x.Logo,
                    LogoSrc = String.Format("{0}://{1}{2}/Logos/{3}",Request.Scheme,Request.Host,Request.PathBase,x.Logo)
                })
                .ToListAsync();
        }

        // GET: api/Party/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Party>> GetParty(int id)
        {
            var party = await _context.Parties.FindAsync(id);

            party.LogoSrc = String.Format("{0}://{1}{2}/Logos/{3}", Request.Scheme, Request.Host, Request.PathBase, party.Logo);

            if (party == null)
            {
                return NotFound();
            }

            return party;
        }

        // PUT: api/Party/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParty(int id, [FromForm] Party party)
        {
            party.PartyID = id;

            _context.Entry(party).State = EntityState.Modified;

            if(party.LogoFile != null)
            {
                DeleteLogo(party.Logo);
                party.Logo = await SaveLogo(party.LogoFile);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartyExists(id))
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

        // POST: api/Party
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Party>> PostParty([FromForm] Party party)
          {
            party.Logo = await SaveLogo(party.LogoFile);
            _context.Parties.Add(party);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetParty", new { id = party.PartyID }, party);
            return StatusCode(201);
        }

        // DELETE: api/Party/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Party>> DeleteParty(int id)
        {
            var party = await _context.Parties.FindAsync(id);
            if (party == null)
            {
                return NotFound();
            }

            _context.Parties.Remove(party);
            await _context.SaveChangesAsync();

            return party;
        }

        private bool PartyExists(int id)
        {
            return _context.Parties.Any(e => e.PartyID == id);
        }

        [NonAction]
        public async Task<string> SaveLogo(IFormFile logoFile)
        {
            string logoName = new String(Path.GetFileNameWithoutExtension(logoFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            logoName = logoName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(logoFile.FileName);
            var logoPath = Path.Combine(_hostEnvironment.ContentRootPath, "Logos", logoName);
            using (var fileStream = new FileStream(logoPath, FileMode.Create))
            {
                await logoFile.CopyToAsync(fileStream);
            }
            return logoName;
        }

        [NonAction]
        public void DeleteLogo(string logoName)
        {
            var logoPath = Path.Combine(_hostEnvironment.ContentRootPath, "Logos", logoName);
            if (System.IO.File.Exists(logoPath))
            {
                System.IO.File.Delete(logoPath);
            }
        }
    }
}
