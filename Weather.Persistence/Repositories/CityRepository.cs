using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Weather.Persistence.Models;
using Serilog;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Weather.Persistence.Repositories
{
    public class CityRepository : Repository<City>, ICityRepository
    {
        public CityRepository(IDbContextFactory dbContextFactory, ILogger logger) : base(dbContextFactory,logger)
        {

        }
        public async Task<City> GetLastAccessedCityAsync()
        {
            var city = await DbContext.Cities.OrderByDescending(x => x.AccessedDate).FirstOrDefaultAsync();
            return city;
        }


        public async Task InsertOrUpdateCityAsync(City city)
        {
            var entity = await GetEntity(city.Id);
            if (entity != null)
            {
                entity.Name = city.Name;
                entity.AccessedDate = city.AccessedDate;
                entity.CountryId = city.CountryId;
                await UpdateEntity(entity);
            }
            else
            {
                await AddEntity(city);
            }
        }
    }
}
