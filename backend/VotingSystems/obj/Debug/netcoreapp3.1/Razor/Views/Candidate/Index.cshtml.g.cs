#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8c221a53f6a2378fc2a52c38ac1daf703858f262"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Candidate_Index), @"mvc.1.0.view", @"/Views/Candidate/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8c221a53f6a2378fc2a52c38ac1daf703858f262", @"/Views/Candidate/Index.cshtml")]
    public class Views_Candidate_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<VotingSystems.Models.Candidate>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Index</h1>\r\n\r\n<p>\r\n    <a asp-action=\"Create\">Create New</a>\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ");
#nullable restore
#line 16 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateNo));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 19 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 22 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateVoteCount));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 25 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Party));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n");
#nullable restore
#line 31 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
 foreach (var item in Model) {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\r\n            <td>\r\n                ");
#nullable restore
#line 34 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateNo));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 37 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 40 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateVoteCount));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 43 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Party.PartyID));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1218, "\"", 1250, 1);
#nullable restore
#line 46 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1233, item.CandidateID, 1233, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\r\n                <a asp-action=\"Details\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1303, "\"", 1335, 1);
#nullable restore
#line 47 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1318, item.CandidateID, 1318, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Details</a> |\r\n                <a asp-action=\"Delete\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1390, "\"", 1422, 1);
#nullable restore
#line 48 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1405, item.CandidateID, 1405, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\r\n            </td>\r\n        </tr>\r\n");
#nullable restore
#line 51 "H:\Engineering\6th Semester\Academic\Software Project\Project\backend\VotingSystems\Views\Candidate\Index.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tbody>\r\n</table>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<VotingSystems.Models.Candidate>> Html { get; private set; }
    }
}
#pragma warning restore 1591