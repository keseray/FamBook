using System;
using System.Collections.Generic;
using System.Text;

namespace FamBook.DataAccess.Entities
{
    public class Account
    {
        public int AccountId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }

    }
}
