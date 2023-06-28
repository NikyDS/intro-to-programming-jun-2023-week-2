using Microsoft.EntityFrameworkCore;
using ShoppingApi.Data;

namespace ShoppingApi.Controllers;

public class StatusLookup : ILookupTheStatus
{
    private readonly ShoppingDataContext _context;
    public async Task<GetStatusResponse> GetCurrentStatusAsync()
    {
        //var savedStatus = await _context.StatusMessages.OrderBy(m => m.LastChecked).FirstOrDefaultAsync();

        //if(savedStatus is null)
        //{
        //    var entityToSave = new StatusEntity
        //    {
        //        LastChecked = DateTimeOffset.Now,
        //        Message = "Looks Good"
        //    };
        //    _context.StatusMessages.Add(entityToSave);
        //    await _context.SaveChangesAsync();

        //}
        //else
        //{

        //}

        var response = new GetStatusResponse
        {
            Message = "Looks Good Here",
            LastChecked = DateTimeOffset.Now
        };
        return response;
    }
}
