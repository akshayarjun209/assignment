document.getElementById('scrapeButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: scrapeTableData,
      });
    });
  });
  
  function scrapeTableData() {
    const table = document.querySelector('table'); 
    if (!table) {
      alert('No table found on this page');
      return;
    }
  
    const rows = table.querySelectorAll('tr');
    const csvData = [];
  
    rows.forEach(row => {
      const rowData = [];
      const cells = row.querySelectorAll('th, td');
      cells.forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      csvData.push(rowData.join(','));
    });
  
    const csvContent = csvData.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table_data.csv';
    a.click();
  }
  