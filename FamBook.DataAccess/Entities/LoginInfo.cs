using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace FamBook.DataAccess.Entities
{
    public class LoginInfo
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public DateTime LastLoginDateTime { get; set; }
        public Guid Token { get; set; }
        public DateTime TokenValidDateTime { get; set; }
        public Account Account { get; set; }
    }
}
