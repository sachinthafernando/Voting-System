#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f61f5882c7c16f758e20d9f2906141e2ffd2238b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_District_Details), @"mvc.1.0.view", @"/Views/District/Details.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f61f5882c7c16f758e20d9f2906141e2ffd2238b", @"/Views/District/Details.cshtml")]
    public class Views_District_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.District>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Details.cshtml"
  
    ViewData["Title"] = "Details";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<h1>Details</h1>\n\n<div>\n    <h4>District</h4>\n    <hr />\n    <dl class=\"row\">\n        <dt class = \"col-sm-2\">\n            ");
#nullable restore
#line 14 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n        </dt>\n        <dd class = \"col-sm-10\">\n            ");
#nullable restore
#line 17 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Details.cshtml"
       Write(Html.DisplayFor(model => model.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n        </dd>\n    </dl>\n</div>\n<div>\n    <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 401, "\"", 425, 1);
#nullable restore
#line 22 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Details.cshtml"
WriteAttributeValue("", 416, Model.ID, 416, 9, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\n    <a asp-action=\"Index\">Back to List</a>\n</div>\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.District> Html { get; private set; }
    }
}
#pragma warning restore 1591
