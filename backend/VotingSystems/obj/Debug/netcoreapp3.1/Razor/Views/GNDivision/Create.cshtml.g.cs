<<<<<<< HEAD
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\GNDivision\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "67acd7f45b13361eccdae9fd3499fb4cdf63ccdb"
=======
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\GNDivision\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4358bd5da1b9bddd57e438514c09fcb18713c435"
>>>>>>> host
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_GNDivision_Create), @"mvc.1.0.view", @"/Views/GNDivision/Create.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4358bd5da1b9bddd57e438514c09fcb18713c435", @"/Views/GNDivision/Create.cshtml")]
    public class Views_GNDivision_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.GNDivision>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\GNDivision\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>GNDivision</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""Name"" class=""control-label""></label>
                <input asp-for=""Name"" class=""form-control"" />
                <span asp-validation-for=""Name"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""PD_ID"" class=""control-label""></label>
                <select asp-for=""PD_ID"" class =""form-control"" asp-items=""ViewBag.PD_ID""></select>
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
#line 36 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\GNDivision\Create.cshtml"
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.GNDivision> Html { get; private set; }
    }
}
#pragma warning restore 1591
