#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "04055e88296d7b1b489515c3a8a03cbe5dfd6db2"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_VoteCan_Delete), @"mvc.1.0.view", @"/Views/VoteCan/Delete.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"04055e88296d7b1b489515c3a8a03cbe5dfd6db2", @"/Views/VoteCan/Delete.cshtml")]
    public class Views_VoteCan_Delete : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<VotingSystems.Models.VoteCan>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
  
    ViewData["Title"] = "Delete";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>VoteCan</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 15 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Time));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 18 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Time));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 21 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Candidate));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 24 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Candidate.CandidateID));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd class>\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 27 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Votes));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 30 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\VoteCan\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Votes.VoteID));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
        </dd class>
    </dl>
    
    <form asp-action=""Delete"">
        <input type=""hidden"" asp-for=""VoteCanID"" />
        <input type=""submit"" value=""Delete"" class=""btn btn-danger"" /> |
        <a asp-action=""Index"">Back to List</a>
    </form>
</div>
");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<VotingSystems.Models.VoteCan> Html { get; private set; }
    }
}
#pragma warning restore 1591