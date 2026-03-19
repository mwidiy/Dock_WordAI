import Hero from "@/components/Hero";
import StepCard from "@/components/StepCard";

const steps = [
  {
    title: "Buat Folder & Simpan File",
    description:
      "Bikin folder biasa di laptop (misal: C:\\AddinGue) dan taruh file manifest.xml yang sudah di-download ke dalam folder tersebut.",
    imageUrl: "/g-1.png", // Ganti dengan nama file foto kamu untuk step 1
  },
  {
    title: "Share Folder ke Network",
    description:
      "Klik kanan folder itu → Properties → tab Sharing → klik Share… → tambahin user kamu sendiri dan ubah Permission Level jadi Read/Write. Terus Copy 'Network Path' foldernya (contoh: \\\\NAMA-LAPTOP\\AddinGue).",
    imageUrl: "/g-2.png", // Ganti dengan nama file foto kamu untuk step 2
  },
  {
    title: "Buka Microsoft Office",
    description: "Buka aplikasi Word Desktop di laptop kamu.",
    imageUrl: "/g-3.png", // Ganti dengan nama file foto kamu untuk step 3
  },
  {
    title: "Masuk ke Trust Center",
    description:
      "Pergi ke menu File > Options > Trust Center > klik tombol 'Trust Center Settings' > pilih 'Trusted Add-in Catalogs'.",
    imageUrl: "/g-4.png", // Ganti dengan nama file foto kamu untuk step 4
  },
  {
    title: "Daftarkan Folder",
    description:
      "Paste path folder yang tadi di-copy ke kotak 'Catalog Url', lalu klik tombol 'Add catalog',Centang kotak 'Show in Menu', klik OK, dan restart (tutup dan buka kembali) aplikasi Word-nya..",
    imageUrl: "/g-4.1.png", // Ganti dengan nama file foto kamu untuk step 5
  },
  {
    title: "Tampilkan di Menu",
    description:
      "Ke halaman dokument word, tinggal pergi ke tab Insert > Add-ins > More Add-ins.",
    imageUrl: "/g5.png", // Ganti dengan nama file foto kamu untuk step 6
  },
  {
    title: "Gunakan Add-in",
    description:
      "Pilih SHARED FOLDER, Klik Ai Word Agent, Lalu Klik Add. Add-in kamu bakal muncul di situ dan siap digunakan!",
    imageUrl: "/g6.png", // Ganti dengan nama file foto kamu untuk step 7
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <section className="max-w-3xl mx-auto py-24 px-6 flex flex-col gap-10">
        {steps.map((step, i) => (
          <StepCard
            key={i}
            stepNumber={i + 1}
            title={step.title}
            description={step.description}
            imageUrl={step.imageUrl} // Kode ini yang mengirim gambar ke komponen StepCard
            isLast={i === steps.length - 1}
          />
        ))}
      </section>

      <footer className="border-t border-border py-10 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Widi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;