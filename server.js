const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// INITIAL DATA (The starting state)
// Masalah: Andi dan Maria adalah ahli waris saat ini.
let heirs = ['Andi', 'Maria'];

// Audit Trail (Saat ini kosong, tugas kandidat untuk memperbaikinya)
let history = [];

// Simulate artificial delay to make race conditions easier to trigger manually
const DELAY = 2000; 

app.get('/api/heirs', (req, res) => {
    res.json({ heirs, history });
});

// ENDPOINT YANG BUGGY
// Endpoint ini menerima daftar nama baru dan langsung menimpa data lama.
// Tidak ada pengecekan versioning, locking, atau atomic operation.
app.post('/api/heirs', (req, res) => {
    const { newHeirs, actor } = req.body;

    console.log(`[${actor}] Request to update received. Current: ${JSON.stringify(heirs)} -> New: ${JSON.stringify(newHeirs)}`);
    console.log(`[${actor}] Processing... (Simulating delay)`);

    // Simulasi delay proses server (seolah-olah sedang "berpikir" atau IO lambat)
    // Ini membuka jendela waktu untuk race condition.
    setTimeout(() => {
        heirs = newHeirs; // DANGER: Blind overwrite!
        console.log(`[${actor}] Update Success! Result: ${JSON.stringify(heirs)}`);
        
        // Catat 'history' seadanya (tidak lengkap)
        history.push({
            timestamp: new Date().toISOString(),
            actor,
            action: 'OVERWRITE_DATA',
            result: heirs
        });

        res.json({ success: true, heirs, history });
    }, DELAY);
});

// Endpoint untuk reset simulasi
app.post('/api/reset', (req, res) => {
    heirs = ['Andi', 'Maria'];
    history = [];
    console.log('--- RESET ---');
    res.json({ success: true, heirs });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
