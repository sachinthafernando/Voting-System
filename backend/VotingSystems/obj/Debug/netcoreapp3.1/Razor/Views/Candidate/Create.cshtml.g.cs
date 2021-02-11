#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "92acb09c503cd2586da048d182952a1cb2a39abf"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Candidate_Create), @"mvc.1.0.view", @"/Views/Candidate/Create.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"92acb09c503cd2586da048d182952a1cb2a39abf", @"/Views/Candidate/Create.cshtml")]
    public class Views_Candidate_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.Candidate>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>Candidate</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""CandidateNo"" class=""control-label""></label>
                <input asp-for=""CandidateNo"" class=""form-control"" />
                <span asp-validation-for=""CandidateNo"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""CandidateName"" class=""control-label""></label>
                <input asp-for=""CandidateName"" class=""form-control"" />
                <span asp-validation-for=""CandidateName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""CandidateVoteCount"" class=""control-label""></label>
                <input asp-for=""CandidateVoteCount"" class=""form-control"" />
                <span asp-val");
            WriteLiteral(@"idation-for=""CandidateVoteCount"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Party_ID"" class=""control-label""></label>
                <select asp-for=""Party_ID"" class =""form-control"" asp-items=""ViewBag.Party_ID""></select>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Create"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 46 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Create.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.Candidate> Html { get; private set; }
    }
}
#pragma warning restore 1591
