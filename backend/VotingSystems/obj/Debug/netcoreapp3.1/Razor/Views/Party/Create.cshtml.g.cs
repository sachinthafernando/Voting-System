#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Party\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c6489064fbda26b62218d5459ff44a2bc443c3ff"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Party_Create), @"mvc.1.0.view", @"/Views/Party/Create.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c6489064fbda26b62218d5459ff44a2bc443c3ff", @"/Views/Party/Create.cshtml")]
    public class Views_Party_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.Party>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Party\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>Party</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""PartyName"" class=""control-label""></label>
                <input asp-for=""PartyName"" class=""form-control"" />
                <span asp-validation-for=""PartyName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""PartyVotecount"" class=""control-label""></label>
                <input asp-for=""PartyVotecount"" class=""form-control"" />
                <span asp-validation-for=""PartyVotecount"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Logo"" class=""control-label""></label>
                <input asp-for=""Logo"" class=""form-control"" />
                <span asp-validation-for=""Logo"" class=""text-dang");
            WriteLiteral(@"er""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Color"" class=""control-label""></label>
                <input asp-for=""Color"" class=""form-control"" />
                <span asp-validation-for=""Color"" class=""text-danger""></span>
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
#line 47 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Party\Create.cshtml"
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.Party> Html { get; private set; }
    }
}
#pragma warning restore 1591