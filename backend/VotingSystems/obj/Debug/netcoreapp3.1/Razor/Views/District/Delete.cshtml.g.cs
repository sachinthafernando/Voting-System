<<<<<<< HEAD
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\District\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d3abd85e409231e9ef8c0b2befeacf775e9471b1"
=======
#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\backend\VotingSystems\Views\District\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2ddf20f3a424a9a57557d90f08ac870a0d49e1b4"
>>>>>>> host
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_District_Delete), @"mvc.1.0.view", @"/Views/District/Delete.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2ddf20f3a424a9a57557d90f08ac870a0d49e1b4", @"/Views/District/Delete.cshtml")]
    public class Views_District_Delete : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.District>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\District\Delete.cshtml"
  
    ViewData["Title"] = "Delete";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>District</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 15 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\District\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 18 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\District\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Name));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n    </dl>\r\n    \r\n    <form asp-action=\"Delete\">\r\n        <input type=\"hidden\" asp-for=\"ID\" />\r\n        <input type=\"submit\" value=\"Delete\" class=\"btn btn-danger\" /> |\r\n        <a asp-action=\"Index\">Back to List</a>\r\n    </form>\r\n</div>\r\n");
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
