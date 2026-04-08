namespace Book_backend.DTOs
{
    public class InwardDto
    {
        public int BookId { get; set; }
        public int ShopId { get; set; }
        public int AgentId { get; set; }
        public int Quantity { get; set; }
        public string? Remarks { get; set; }
        public DateTime InwardDate { get; set; }
        public string? CreatedBy { get; set; }
    }
}
