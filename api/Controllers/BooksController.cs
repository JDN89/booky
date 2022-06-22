using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class BooksController : ControllerBase
{
    private readonly BookContext _context;


    public BooksController(BookContext context)
    {
        _context = context;
    }


    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetAllBooks()
    {
        var books = new List<Book>();
        try
        {
            BookLoader.LoadBooks(_context);
            books = _context.Books.ToList();
            if (books is null)
            {
                return NotFound();
            }
            return Ok(books);
            
            

        }
        catch (Exception ex)
        {
            throw new Exception();
        } 
    }
}