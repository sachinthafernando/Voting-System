<<<<<<< HEAD
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Person\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "14b40ebd70c28bb12acfed72cb7be011000d9941"
=======
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\Person\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a5cdf1266b7837ba2a2bf37cf544613dafd533f0"
>>>>>>> host
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Person_Edit), @"mvc.1.0.view", @"/Views/Person/Edit.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a5cdf1266b7837ba2a2bf37cf544613dafd533f0", @"/Views/Person/Edit.cshtml")]
    public class Views_Person_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.Person>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Person\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Edit</h1>

<h4>Person</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <input type=""hidden"" asp-for=""NIC"" />
            <div class=""form-group"">
                <label asp-for=""SerialNo"" class=""control-label""></label>
                <input asp-for=""SerialNo"" class=""form-control"" />
                <span asp-validation-for=""SerialNo"" class=""text-danger""></span>
            </div>
            <div class=""form-group form-check"">
                <label class=""form-check-label"">
                    <input class=""form-check-input"" asp-for=""Voted"" /> ");
#nullable restore
#line 23 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Person\Edit.cshtml"
                                                                  Write(Html.DisplayNameFor(model => model.Voted));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                </label>
            </div>
            <div class=""form-group"">
                <label asp-for=""GND"" class=""control-label""></label>
                <select asp-for=""GND"" class=""form-control"" asp-items=""ViewBag.GND""></select>
                <span asp-validation-for=""GND"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-primary"" />
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
#line 43 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Person\Edit.cshtml"
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.Person> Html { get; private set; }
    }
}
#pragma warning restore 1591
