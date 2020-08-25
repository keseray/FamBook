using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FamBook.Services
{
    public static class ServiceInjectionModule
    {
        public static IServiceCollection InjectServices(this IServiceCollection services)
        {
            services.AddTransient<ICityService, CityService>();
            return services;
        }
    }
}
