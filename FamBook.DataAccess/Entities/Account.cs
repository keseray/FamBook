using System;
using System.Collections.Generic;
using System.Text;

namespace FamBook.DataAccess.Entities
{
    public class Account
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public int LoginInfoId { get; set; }
        public LoginInfo LoginInfo { get; set; }
    }
}
