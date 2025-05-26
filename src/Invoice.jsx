import React, { useState, useRef } from "react";

const sampleItems = [
  { id: 1, name: 'Delivery', cost: 20 },
  { id: 2, name: 'Jar Cake', cost: 120 },
  { id: 3, name: 'Cake 1/2 Kg', cost: 500 },
  { id: 4, name: 'Cake 1 kg', cost: 900 },
  { id: 5, name: 'Thali', cost: 100 },
  { id: 6, name: 'Smoothie', cost: 89 },
  { id: 7, name: 'Poha', cost: 45 },
  { id: 8, name: 'Aloo Paratha', cost: 100 },
  { id: 9, name: 'Hot Chocolate', cost: 79 },
  { id: 10, name: 'Hot Chocolate small', cost: 60 }
];

export default function InvoiceGenerator() {
  const [items] = useState(sampleItems);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [selectedItems, setSelectedItems] = useState([]);
  const [invoiceDate] = useState(() => new Date());

  const invoiceRef = useRef(null);
  const formatDateTime = (date) => {
  return date.toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
};


  const handleAddItem = (item) => {
    if (!selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems((prev) => [...prev, { ...item, qty: 1, discount: 0 }]);
      setShowForm(true);
    }
  };

  const updateItem = (id, key, value) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [key]: Number(value) } : item
      )
    );
  };

  const getSubtotal = () =>
    selectedItems.reduce((acc, item) => acc + item.cost * item.qty, 0);

  const getDiscountTotal = () =>
    selectedItems.reduce((acc, item) => acc + item.discount, 0);

  const getFinalTotal = () => getSubtotal() - getDiscountTotal();

 const generateImage = () => {
  const cleanInvoice = document.getElementById("clean-invoice");
  cleanInvoice.style.display = "block"; // Show clean version for screenshot

  setTimeout(() => {
    html2canvas(cleanInvoice, { backgroundColor: '#ffffff', scale: 2 }).then((canvas) => {
      canvas.toBlob((blob) => {
        // Copy image to clipboard
        navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob
          })
        ]).then(() => {
          alert("Invoice copied to clipboard. It will open WhatsApp – just paste (Ctrl+V) to send.");
          // Open WhatsApp with prefilled number
          const phone = customer.phone.replace(/\D/g, ''); // Clean digits
          if (phone.length >= 10) {
            window.open(`https://wa.me/91${phone}`, '_blank');
          } else {
            alert("Invalid phone number");
          }
        }).catch((err) => {
          console.error("Clipboard copy failed:", err);
          alert("Failed to copy image. Please download manually.");
          // Inside clipboard error catch
const link = document.createElement("a");
link.download = "invoice.png";
link.href = canvas.toDataURL();
link.click();

        });

        // Hide clean invoice
        cleanInvoice.style.display = "none";
      }, "image/png");
    });
  }, 500);
};



  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h2>Items</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <ul>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              {item.name} - ₹{item.cost}
              <button onClick={() => handleAddItem(item)}>Add</button>
            </li>
          ))}
      </ul>

      {showForm && (
        <div style={{ marginTop: 16 }}>
          <h3>Customer Info</h3>
          <input
            placeholder="Name"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            style={{ display: 'block', marginBottom: 8 }}
          />
          <input
            placeholder="Phone"
            value={customer.phone}
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            style={{ display: 'block', marginBottom: 16 }}
          />

          <div
  ref={invoiceRef}
  style={{
    padding: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontSize: '14px',
    fontFamily: 'sans-serif',
    lineHeight: '1.4',
    color: '#000'
  }}
>
  <h2 style={{ textAlign: "center", margin: 0, paddingBottom: 4 }}>Jiva's</h2>
  <p style={{ margin: '4px 0' }}>
    <strong>Customer:</strong> {customer.name} ({customer.phone})
  </p>
  <p style={{ margin: '4px 0' }}>
    <strong>Date:</strong> {formatDateTime(invoiceDate)}
  </p>

  <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }} border="1">
    <thead>
      <tr style={{ backgroundColor: '#eee' }}>
        <th style={{ padding: 4 }}>Item</th>
        <th style={{ padding: 4 }}>Qty</th>
        <th style={{ padding: 4 }}>Price</th>
        <th style={{ padding: 4 }}>Discount</th>
        <th style={{ padding: 4 }}>Total</th>
      </tr>
    </thead>
    <tbody>
      {selectedItems.map((item) => (
        <tr key={item.id}>
          <td style={{ padding: 4 }}>{item.name}</td>
          <td style={{ padding: 4 }}>
            <input
              type="number"
              value={item.qty}
              onChange={(e) => updateItem(item.id, 'qty', e.target.value)}
              style={{ width: 40 }}
            />
          </td>
          <td style={{ padding: 4, textAlign: "right" }}>₹{item.cost}</td>
          <td style={{ padding: 4 }}>
            <input
              type="number"
              value={item.discount}
              onChange={(e) => updateItem(item.id, 'discount', e.target.value)}
              style={{ width: 50 }}
            />
          </td>
          <td style={{ padding: 4, textAlign: "right" }}>
            ₹{(item.cost * item.qty) - item.discount}
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <div style={{ marginTop: 8 }}>
    <p style={{ margin: '4px 0' }}>Subtotal: ₹{getSubtotal()}</p>
    {getDiscountTotal() > 0 && (
      <p style={{ margin: '4px 0' }}>Total Discount: ₹{getDiscountTotal()}</p>
    )}
    <h3 style={{ margin: '6px 0' }}>Total: ₹{getFinalTotal()}</h3>
  </div>

  <p style={{ textAlign: "center", marginTop: 12, fontWeight: "bold" }}>
    Thank you for your order!
  </p>
</div>


          <button onClick={generateImage} style={{ marginTop: 12 }}>
            Generate Invoice Image
          </button>
        </div>
      )}
      {/* Hidden clean version for image */}
<div id="clean-invoice" style={{
  display: 'none',
  padding: '16px',
  fontFamily: 'sans-serif',
  width: '300px',
  fontSize: '14px',
  lineHeight: '1.4',
  color: '#000'
}}>
  <h2 style={{ textAlign: "center", margin: 0, paddingBottom: 4 }}>Jiva's</h2>
  <p style={{ margin: '4px 0' }}><strong>Customer:</strong> {customer.name} ({customer.phone})</p>
  <p style={{ margin: '4px 0' }}><strong>Date:</strong> {formatDateTime(invoiceDate)}</p>

  <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }} border="1">
    <thead>
      <tr style={{ backgroundColor: '#eee' }}>
        <th style={{ padding: 4 }}>Item</th>
        <th style={{ padding: 4 }}>Qty</th>
        <th style={{ padding: 4 }}>Price</th>
        <th style={{ padding: 4 }}>Total</th>
      </tr>
    </thead>
    <tbody>
      {selectedItems.map((item) => (
        <tr key={item.id}>
          <td style={{ padding: 4 }}>{item.name}</td>
          <td style={{ padding: 4, textAlign: "center" }}>{item.qty}</td>
          <td style={{ padding: 4, textAlign: "right" }}>₹{item.cost}</td>
          <td style={{ padding: 4, textAlign: "right" }}>
            ₹{(item.cost * item.qty) - item.discount}
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <div style={{ marginTop: 8 }}>
    <p style={{ margin: '4px 0' }}>Subtotal: ₹{getSubtotal()}</p>
    {getDiscountTotal() > 0 && (
      <p style={{ margin: '4px 0' }}>Total Discount: ₹{getDiscountTotal()}</p>
    )}
    <h3 style={{ margin: '6px 0' }}>Total: ₹{getFinalTotal()}</h3>
  </div>

  <p style={{ textAlign: "center", marginTop: 12, fontWeight: "bold" }}>
    Thank you for your order!
  </p>
</div>




      {!showForm && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "50%",
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            cursor: "pointer",
          }}
          onClick={() => setShowForm(true)}
        >
          +
        </div>
      )}
    </div>
  );
}

// Note: You must include html2canvas manually in public/index.html
// Example: <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
