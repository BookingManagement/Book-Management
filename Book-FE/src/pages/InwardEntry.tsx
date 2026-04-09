// import { useState } from "react";
// import { MainLayout } from "@/components/layout/MainLayout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarIcon, Plus, Filter } from "lucide-react";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import { bookNames, suppliers } from "@/data/bookData";
// import { toast } from "@/hooks/use-toast";

// const recentEntries = [
//   { id: "1", date: "2025-12-01", bookName: "Ananda Vikatan", quantity: 20, supplier: "Vikatan Publications", billNo: "VIK-2024-001" },
//   { id: "2", date: "2025-11-30", bookName: "Junior Vikatan", quantity: 30, supplier: "Vikatan Publications", billNo: "VIK-2024-002" },
//   { id: "3", date: "2025-11-29", bookName: "Kungumam", quantity: 25, supplier: "Kungumam Media", billNo: "KUN-2024-015" },
//   { id: "4", date: "2025-11-28", bookName: "Bakathi", quantity: 23, supplier: "Kumadam Press", billNo: "KUM-2024-008" },
// ];

// const InwardEntry = () => {
//   const [date, setDate] = useState<Date>();
//   const [bookName, setBookName] = useState("");
//   const [author, setAuthor] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [supplierName, setSupplierName] = useState("");
//   const [billNumber, setBillNumber] = useState("");
//   const [remarks, setRemarks] = useState("");

//   const handleSave = () => {
//     if (!date || !bookName || !quantity || !supplierName) {
//       toast({
//         title: "Validation Error",
//         description: "Please fill in all required fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     toast({
//       title: "Entry Saved",
//       description: `Inward entry for ${quantity} copies of ${bookName} has been saved.`,
//     });

//     // Reset form
//     setDate(undefined);
//     setBookName("");
//     setAuthor("");
//     setQuantity("");
//     setSupplierName("");
//     setBillNumber("");
//     setRemarks("");
//   };

//   return (
//     <MainLayout title="Inward Entry" subtitle="Record new stock arrivals">
//       <div className="grid gap-6 lg:grid-cols-5">
//         {/* Form Section */}
//         <div className="lg:col-span-3">
//           <div className="card-shadow rounded-xl bg-card p-6 animate-fade-in">
//             <h3 className="mb-6 text-lg font-semibold text-foreground">New Inward Entry</h3>

//             <div className="grid gap-5 md:grid-cols-2">
//               {/* Date */}
//               <div className="space-y-2">
//                 <Label htmlFor="date">Date *</Label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {date ? format(date, "PPP") : "Select date"}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={date}
//                       onSelect={setDate}
//                       initialFocus
//                       className="pointer-events-auto"
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Book Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="bookName">Book Name *</Label>
//                 <Select value={bookName} onValueChange={setBookName}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select book" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-popover">
//                     {bookNames.map((book) => (
//                       <SelectItem key={book} value={book}>
//                         {book}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Author / Publisher */}
//               <div className="space-y-2">
//                 <Label htmlFor="author">Author / Publisher</Label>
//                 <Input
//                   id="author"
//                   value={author}
//                   onChange={(e) => setAuthor(e.target.value)}
//                   placeholder="Enter author or publisher"
//                 />
//               </div>

//               {/* Quantity */}
//               <div className="space-y-2">
//                 <Label htmlFor="quantity">Quantity Inward *</Label>
//                 <Input
//                   id="quantity"
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   placeholder="Enter quantity"
//                 />
//               </div>

//               {/* Supplier */}
//               <div className="space-y-2">
//                 <Label htmlFor="supplier">Supplier Name *</Label>
//                 <Select value={supplierName} onValueChange={setSupplierName}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select supplier" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-popover">
//                     {suppliers.map((supplier) => (
//                       <SelectItem key={supplier} value={supplier}>
//                         {supplier}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Bill Number */}
//               <div className="space-y-2">
//                 <Label htmlFor="billNumber">Bill Number / Reference</Label>
//                 <Input
//                   id="billNumber"
//                   value={billNumber}
//                   onChange={(e) => setBillNumber(e.target.value)}
//                   placeholder="Enter bill number"
//                 />
//               </div>

//               {/* Remarks */}
//               <div className="space-y-2 md:col-span-2">
//                 <Label htmlFor="remarks">Remarks</Label>
//                 <Textarea
//                   id="remarks"
//                   value={remarks}
//                   onChange={(e) => setRemarks(e.target.value)}
//                   placeholder="Enter any additional notes"
//                   rows={3}
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <Button onClick={handleSave} className="gap-2">
//                 <Plus className="h-4 w-4" />
//                 Save Inward Entry
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Recent Entries Panel */}
//         <div className="lg:col-span-2">
//           <div className="card-shadow rounded-xl bg-card animate-fade-in">
//             <div className="flex items-center justify-between border-b border-border p-4">
//               <div>
//                 <h3 className="font-semibold text-foreground">Recent Inward Entries</h3>
//                 <p className="text-sm text-muted-foreground">Last 7 days</p>
//               </div>
//               <Button variant="outline" size="sm" className="gap-1">
//                 <Filter className="h-4 w-4" />
//                 Filter
//               </Button>
//             </div>
//             <div className="max-h-[500px] overflow-y-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow className="hover:bg-transparent">
//                     <TableHead>Book</TableHead>
//                     <TableHead className="text-right">Qty</TableHead>
//                     <TableHead>Date</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {recentEntries.map((entry) => (
//                     <TableRow key={entry.id}>
//                       <TableCell>
//                         <div>
//                           <p className="font-medium">{entry.bookName}</p>
//                           <p className="text-xs text-muted-foreground">{entry.billNo}</p>
//                         </div>
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <Badge variant="secondary">{entry.quantity}</Badge>
//                       </TableCell>
//                       <TableCell className="text-muted-foreground text-sm">
//                         {entry.date}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default InwardEntry;
import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, Filter } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

// API services
import { getBooks, getShops, getAgents } from "@/pages/services/masterServices";
import {
  InwardService,
  InwardPayload,
  InwardEntry,
} from "@/pages/services/inward.service";
// ---------------- STATIC
const recentEntries = [
  {
    id: "1",
    date: "2025-12-01",
    bookName: "Ananda Vikatan",
    quantity: 20,
    billNo: "VIK-2024-001",
  },
  {
    id: "2",
    date: "2025-11-30",
    bookName: "Junior Vikatan",
    quantity: 30,
    billNo: "VIK-2024-002",
  },
];

const InwardEntries = () => {
  // ---------------- FORM STATE
  const [date, setDate] = useState<Date | undefined>();
  const [bookId, setBookId] = useState("");
  const [shopId, setShopId] = useState("");
  const [agentId, setAgentId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [remarks, setRemarks] = useState("");

  // ---------------- MASTER DATA
  const [books, setBooks] = useState<any[]>([]);
  const [shops, setShops] = useState<any[]>([]);
  const [agents, setAgents] = useState<any[]>([]);
  const [recentEntries, setRecentEntries] = useState<InwardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMasterData();
  }, []);

  const loadMasterData = async () => {
    try {
      const [booksRes, shopsRes, agentsRes] = await Promise.all([
        getBooks(),
        getShops(),
        getAgents(),
      ]);

      console.log("✅ BOOKS STATE:", booksRes);
      console.log("✅ SHOPS STATE:", shopsRes);
      console.log("✅ AGENTS STATE:", agentsRes);

      setBooks(Array.isArray(booksRes) ? booksRes : []);
      setShops(Array.isArray(shopsRes) ? shopsRes : []);
      setAgents(Array.isArray(agentsRes) ? agentsRes : []);
    } catch {
      toast({
        title: "Error",
        description: "Failed to load master data",
        variant: "destructive",
      });
    }
  };
  const getAgentNameFromBook = (bookName: string) => {
    if (bookName.includes("Vikatan")) return "Vikatan";
    if (bookName.includes("Kumudam")) return "Kumadam";
    if (bookName.includes("Kungumam")) return "Kungumam";
    if (bookName.includes("Rani")) return "Rani";
    if (bookName.includes("Nakeer")) return "Nakeeheeran";
    return "";
  };

  // ---------------- SAVE

  const inwardService = new InwardService();
  // Fetch recent entries
  const fetchRecent = async () => {
    try {
      setLoading(true);
      const data = await inwardService.getRecentInwards();
      setRecentEntries(data);
    } catch (err) {
      console.error("❌ Failed to fetch recent inwards:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecent();
  }, []);


  const handleSave = async () => {
    if (!date || !bookId || !shopId || !agentId || !quantity) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Merge the selected date with the exact current time
    const now = new Date();
    const submissionDate = new Date(date);
    submissionDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());

    const payload: InwardPayload = {
      bookId: Number(bookId),
      shopId: Number(shopId),
      agentId: Number(agentId),
      quantity: Number(quantity),
      remarks: remarks || "",
      // Send the date in local format so backend saves exactly this day, avoiding UTC offset issues
      inwardDate: format(submissionDate, "yyyy-MM-dd'T'HH:mm:ss"),
      createdBy: "admin",
    };

    try {
      await inwardService.createInward(payload);

      toast({
        title: "Entry Saved",
        description: "Inward entry saved successfully",
      });

      // Reset form
      setDate(undefined);
      setBookId("");
      setShopId("");
      setAgentId("");
      setQuantity("");
      setBillNumber("");
      setRemarks("");
      fetchRecent();

    } catch (error) {
      console.error("❌ SAVE ERROR 👉", error);

      toast({
        title: "Save Failed",
        description: "Failed to save inward entry",
        variant: "destructive",
      });
    }
  };



  return (
    <MainLayout title="Inward Entry" subtitle="Record new stock arrivals">
      <div className="grid gap-6 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3">
          <div className="card-shadow rounded-xl bg-card p-6">
            <h3 className="mb-6 text-lg font-semibold">New Inward Entry</h3>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Date */}
              <div className="space-y-2">
                <Label>Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Book */}
              <div className="space-y-2">
                <Label>Book Name *</Label>
                <Select
                  value={bookId}
                  onValueChange={(selectedBookId) => {
                    setBookId(selectedBookId);

                    const selectedBook = books.find(
                      (b) => String(b.bookId) === selectedBookId,
                    );

                    if (selectedBook) {
                      const agentName = getAgentNameFromBook(
                        selectedBook.bookName,
                      );

                      const matchedAgent = agents.find(
                        (a) => a.agentName === agentName,
                      );

                      if (matchedAgent) {
                        setAgentId(String(matchedAgent.agentId));
                      }
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select book" />
                  </SelectTrigger>
                  <SelectContent>
                    {books
                      // .filter((b) => b.Active)
                      .map((b) => (
                        <SelectItem
                          key={String(b.bookId)}
                          value={String(b.bookId)}
                        >
                          {b.bookName}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Shop */}
              <div className="space-y-2">
                <Label>Shop *</Label>
                <Select value={shopId} onValueChange={setShopId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shop" />
                  </SelectTrigger>
                  <SelectContent>
                    {shops
                      // .filter((s) => s.Active)
                      .map((s) => (
                        <SelectItem
                          key={String(s.shopId)}
                          value={String(s.shopId)}
                        >
                          {s.shopName}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label>Quantity Inward *</Label>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* Agent */}
              <div className="space-y-2">
                <Label>Agent *</Label>
                <Select value={agentId} onValueChange={setAgentId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select agent" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(
                      new Map(
                        agents
                          // .filter((a) => a.Active)
                          .map((a) => [a.agentName, a]),
                      ).values(),
                    ).map((a) => (
                      <SelectItem
                        key={String(a.agentId)}
                        value={String(a.agentId)}
                      >
                        {a.agentName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Bill */}
              <div className="space-y-2">
                <Label>Bill Number</Label>
                <Input
                  value={billNumber}
                  onChange={(e) => setBillNumber(e.target.value)}
                />
              </div>

              {/* Remarks */}
              <div className="space-y-2 md:col-span-2">
                <Label>Remarks</Label>
                <Textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={handleSave} className="gap-2">
                <Plus className="h-4 w-4" />
                Save Inward Entry
              </Button>
            </div>
          </div>
        </div>

        {/* RECENT */}
        <div className="lg:col-span-2">
          <div className="card-shadow rounded-xl bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-semibold">Recent Inward Entries</h3>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <Table>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={3}>Loading...</TableCell>
                  </TableRow>
                ) : recentEntries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3}>No recent entries</TableCell>
                  </TableRow>
                ) : (
                  recentEntries.map((e) => (
                    <TableRow key={e.rowId}>
                      <TableCell>
                        {
                          e.bookName /* replace with bookName if backend returns it */
                        }
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge>{e.quantity}</Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(e.inwardDate).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default InwardEntries;
