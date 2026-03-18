import Hero from "@/components/Hero";
import StepCard from "@/components/StepCard";

const steps = [
  {
    title: "Buat Folder & Simpan File",
    description:
      "Suruh mereka bikin folder biasa di laptopnya (misal: C:\\AddinGue) dan taruh file manifest.xml yang sudah di-download ke dalam folder tersebut.",
  },
  {
    title: "Share Folder ke Network",
    description:
      "Klik kanan folder itu → Properties → tab Sharing → klik Share… → tambahin user kamu sendiri dan ubah Permission Level jadi Read/Write. Terus Copy 'Network Path' foldernya (contoh: \\\\NAMA-LAPTOP\\AddinGue).",
  },
  {
    title: "Buka Microsoft Office",
    description: "Buka aplikasi Word atau Excel Desktop di laptop kamu.",
  },
  {
    title: "Masuk ke Trust Center",
    description:
      "Pergi ke menu File > Options > Trust Center > klik tombol 'Trust Center Settings' > pilih 'Trusted Add-in Catalogs'.",
  },
  {
    title: "Daftarkan Folder",
    description:
      "Paste path folder yang tadi di-copy ke kotak 'Catalog Url', lalu klik tombol 'Add catalog'.",
  },
  {
    title: "Tampilkan di Menu",
    description:
      "Centang kotak 'Show in Menu', klik OK, dan restart (tutup dan buka kembali) aplikasi Word/Excel-nya.",
  },
  {
    title: "Gunakan Add-in",
    description:
      "Pas dibuka lagi, tinggal pergi ke tab Insert > Add-ins > Shared Folder. Add-in kamu bakal muncul di situ dan siap digunakan!",
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
            isLast={i === steps.length - 1}
          />
        ))}
      </section>

      <footer className="border-t border-border py-10 text-center">
        <p className="text-muted-foreground text-sm">
          Built for custom add-in deployment.
        </p>
      </footer>
    </div>
  );
};

export default Index;
