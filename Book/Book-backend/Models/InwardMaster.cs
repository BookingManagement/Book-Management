using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Book_backend.Models
{
    public class InwardMaster
    {
        [Key]
        public int RowId{ get; set; }
        [Required]
        public int BookId { get; set; }
        [Required]
        public int ShopId { get; set; }
        [Required]
        public int AgentId { get; set; }
        [Required]
        public int Quantity { get; set; }
        public string? Remarks { get; set; }
        [Required]
        public DateTime InwardDate { get; set; }
        public string? Status { get; set; }
        public bool Active { get; set; } = true;
        public string? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; } 
        public string? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; } = DateTime.Now;

        //Foreign keys

        [ForeignKey("BookId")]
        public  BookMaster? Book { get; set; }
        [ForeignKey("ShopId")]
        public  ShopMaster? Shop { get; set; }
        [ForeignKey("AgentId")]
        public  AgentMaster? Agent { get; set; }
    }
}
