#pragma checksum "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1723924df083424a1233218ac136c86409be7e1d"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1723924df083424a1233218ac136c86409be7e1d", @"/Views/Candidate/Index.cshtml")]
    public class Views_Candidate_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<VotingSystems.Models.Candidate>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 3 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<h1>Index</h1>\n\n<p>\n    <a asp-action=\"Create\">Create New</a>\n</p>\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>\n                ");
#nullable restore
#line 16 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateNo));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </th>\n            <th>\n                ");
#nullable restore
#line 19 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </th>\n            <th>\n                ");
#nullable restore
#line 22 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.CandidateVoteCount));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </th>\n            <th>\n                ");
#nullable restore
#line 25 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Party));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n");
#nullable restore
#line 31 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
 foreach (var item in Model) {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\n            <td>\n                ");
#nullable restore
#line 34 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateNo));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </td>\n            <td>\n                ");
#nullable restore
#line 37 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </td>\n            <td>\n                ");
#nullable restore
#line 40 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.CandidateVoteCount));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </td>\n            <td>\n                ");
#nullable restore
#line 43 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Party.PartyID));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </td>\n            <td>\n                <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1173, "\"", 1205, 1);
#nullable restore
#line 46 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1188, item.CandidateID, 1188, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\n                <a asp-action=\"Details\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1257, "\"", 1289, 1);
#nullable restore
#line 47 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1272, item.CandidateID, 1272, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Details</a> |\n                <a asp-action=\"Delete\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1343, "\"", 1375, 1);
#nullable restore
#line 48 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
WriteAttributeValue("", 1358, item.CandidateID, 1358, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\n            </td>\n        </tr>\n");
#nullable restore
#line 51 "H:\Engineering\6th Semester\Academic\Software Project\Final Project\VotingSystems-backend\Views\Candidate\Index.cshtml"
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<VotingSystems.Models.Candidate>> Html { get; private set; }
    }
}
#pragma warning restore 1591
