#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f693eb669587d40ac7b3a5c9168bdd972a6b2834"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_District_Index), @"mvc.1.0.view", @"/Views/District/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f693eb669587d40ac7b3a5c9168bdd972a6b2834", @"/Views/District/Index.cshtml")]
    public class Views_District_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<VotingSystems.Models.District>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<h1>Index</h1>\n\n<p>\n    <a asp-action=\"Create\">Create New</a>\n</p>\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>\n                ");
#nullable restore
#line 16 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n");
#nullable restore
#line 22 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
 foreach (var item in Model) {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\n            <td>\n                ");
#nullable restore
#line 25 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </td>\n            <td>\n                <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 547, "\"", 570, 1);
#nullable restore
#line 28 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
WriteAttributeValue("", 562, item.ID, 562, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\n                <a asp-action=\"Details\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 622, "\"", 645, 1);
#nullable restore
#line 29 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
WriteAttributeValue("", 637, item.ID, 637, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Details</a> |\n                <a asp-action=\"Delete\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 699, "\"", 722, 1);
#nullable restore
#line 30 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
WriteAttributeValue("", 714, item.ID, 714, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\n            </td>\n        </tr>\n");
#nullable restore
#line 33 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Index.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tbody>\n</table>\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<VotingSystems.Models.District>> Html { get; private set; }
    }
}
#pragma warning restore 1591
