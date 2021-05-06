using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace VotingSystems.Models
{
    public class Policies
    {
        public int ID { get; set; }
        public const string Rank1Admin = "Rank1Admin";
        public const string Rank2Admin = "Rank2Admin";
        public const string Rank3Admin = "Rank3Admin";
        public const string Rank4Admin = "Rank4Admin";


        public static AuthorizationPolicy Rank1AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Rank1Admin).Build();
        }
        public static AuthorizationPolicy Rank2AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Rank2Admin).Build();
        }

        public static AuthorizationPolicy Rank3AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Rank3Admin).Build();
        }
        public static AuthorizationPolicy Rank4AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Rank4Admin).Build();
        }

    }
}
