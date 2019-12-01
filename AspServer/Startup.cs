using AspServer.Database;
using GraphiQl;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AspServer {
    public class Startup {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {

            services.AddCors(options => {
                options.AddPolicy("AllowOrigin",
                    builder => builder.AllowAnyOrigin());
            });

            services.AddMvc();
            services.AddDbContext<ApplicationDbContext>(context => {
                context.UseInMemoryDatabase("World-Unravel");
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseGraphiQl("/graphql", "/api");
            app.UseMvc();
        }
    }
}
