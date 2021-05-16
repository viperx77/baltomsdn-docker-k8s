using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BaltoMSDN
{
    [ApiController]
    [Route("[controller]")]
    public class BeerController : ControllerBase
    {
        private readonly ILogger<BeerController> _logger;
        private readonly BeerContext _context;

        public BeerController(BeerContext context, ILogger<BeerController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<beer> Get()
        {
          return _context.beer;
        }
    }
}
