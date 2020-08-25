using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FamBook.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using Weather.Persistence.Models;

namespace FamBook.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly ICityService _services;
        private readonly ILogger _logger;
        public CitiesController(ICityService service, ILogger logger)
        {
            _services = service;
            _logger = logger;

        }
        [HttpGet]
        public async Task<ActionResult<City>> Get()
        {
            var city = await _services.GetLastAccessedCityAsync();
            return city;
        }

        [HttpPost]
        public async Task Post([FromBody] City city)
        {
            await _services.UpdateLastAccessedCityAsync(city);

        }



    }
}