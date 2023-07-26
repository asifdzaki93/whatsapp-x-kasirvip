const messages = {
  en: {
    translations: {
      signup: {
        title: "Daftar",
        toasts: {
          success: "Pengguna berhasil dibuat! Silakan masuk!!!.",
          fail: "Gagal membuat pengguna. Periksa data yang dimasukkan.",
        },
        form: {
          name: "Nama",
          email: "Email",
          password: "Kata Sandi",
        },
        buttons: {
          submit: "Daftar",
          login: "Sudah memiliki akun? Masuk!",
        },
      },
      login: {
        title: "Masuk",
        form: {
          email: "Email",
          password: "Kata Sandi",
        },
        buttons: {
          submit: "Masuk",
          register: "Belum punya akun? Daftar sekarang!",
        },
      },
      auth: {
        toasts: {
          success: "Berhasil masuk!",
        },
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Tiket hari ini: ",
          },
        },
        messages: {
          inAttendance: {
            title: "Dilayani"
          },
          waiting: {
            title: "Menunggu"
          },
          closed: {
            title: "Selesai"
          }
        }
      },
      connections: {
        title: "Koneksi",
        toasts: {
          deleted: "Koneksi dengan WhatsApp berhasil dihapus!",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Anda yakin? Tindakan ini tidak bisa dibalik.",
          disconnectTitle: "Putuskan koneksi",
          disconnectMessage:
            "Anda yakin? Anda akan perlu membaca ulang QR Code.",
        },
        buttons: {
          add: "Tambahkan WhatsApp",
          disconnect: "putuskan koneksi",
          tryAgain: "Coba lagi",
          qrcode: "QR CODE",
          newQr: "QR CODE Baru",
          connecting: "Menghubungkan",
        },
        toolTips: {
          disconnected: {
            title: "Gagal memulai sesi WhatsApp",
            content:
              "Pastikan ponsel Anda terhubung ke internet dan coba lagi, atau minta QR Code baru",
          },
          qrcode: {
            title: "Menunggu pembacaan QR Code",
            content:
              "Klik tombol 'QR CODE' dan baca QR Code dengan ponsel Anda untuk memulai sesi",
          },
          connected: {
            title: "Koneksi berhasil!",
          },
          timeout: {
            title: "Koneksi dengan ponsel terputus",
            content:
              "Pastikan ponsel Anda terhubung ke internet dan WhatsApp terbuka, atau klik tombol 'Putuskan koneksi' untuk mendapatkan QR Code baru",
          },
        },
        table: {
          name: "Nama",
          status: "Status",
          lastUpdate: "Update terakhir",
          default: "Utama",
          actions: "Tindakan",
          session: "Sesi",
        },
      },
      whatsappModal: {
        title: {
          add: "Tambahkan WhatsApp",
          edit: "Edit WhatsApp",
        },
        form: {
          name: "Nama",
          default: "Utama",
          farewellMessage: "Pesan perpisahan"
        },
        buttons: {
          okAdd: "Tambahkan",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "WhatsApp berhasil disimpan.",
      },
      qrCode: {
        message: "Baca QrCode untuk memulai sesi",
      },
      contacts: {
        title: "Kontak",
        toasts: {
          deleted: "Kontak berhasil dihapus!",
        },
        searchPlaceholder: "Cari...",
        confirmationModal: {
          deleteTitle: "Hapus ",
          importTitlte: "Impor kontak",
          deleteMessage:
            "Anda yakin ingin menghapus kontak ini? Semua tiket terkait akan hilang.",
          importMessage: "Apakah Anda ingin mengimpor semua kontak dari telepon?",
        },
        buttons: {
          import: "Impor Kontak",
          add: "Tambah Kontak",
        },
        table: {
          name: "Nama",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Tindakan",
        },
      },
      contactModal: {
        title: {
          add: "Tambah kontak",
          edit: "Edit kontak",
        },
        form: {
          mainInfo: "Data kontak",
          extraInfo: "Informasi tambahan",
          name: "Nama",
          number: "Nomor Whatsapp",
          email: "Email",
          extraName: "Nama field",
          extraValue: "Nilai",
        },
        buttons: {
          addExtraInfo: "Tambah informasi",
          okAdd: "Tambahkan",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Kontak berhasil disimpan.",
      },
      quickAnswersModal: {
        title: {
          add: "Tambahkan Jawaban Cepat",
          edit: "Edit Jawaban Cepat",
        },
        form: {
          shortcut: "Pintasan",
          message: "Jawaban Cepat",
        },
        buttons: {
          okAdd: "Tambahkan",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Jawaban Cepat berhasil disimpan.",
      },
      queueModal: {
        title: {
          add: "Tambah Divisi",
          edit: "Edit Divisi",
        },
        form: {
          name: "Nama",
          color: "Warna",
          greetingMessage: "Pesan sambutan",
        },
        buttons: {
          okAdd: "Tambahkan",
          okEdit: "Simpan",
          cancel: "Batal",
        },
      },
      userModal: {
        title: {
          add: "Tambah pengguna",
          edit: "Ubah pengguna",
        },
        form: {
          name: "Nama",
          email: "Email",
          password: "Kata Sandi",
          profile: "Profil",
          whatsapp: "Koneksi Standar",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Pengguna berhasil disimpan.",
      },
      chat: {
        noTicketMessage: "Pilih tiket untuk memulai percakapan.",
      },
      ticketsManager: {
        buttons: {
          newTicket: "Baru",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Divisi",
      },
      tickets: {
        toasts: {
          deleted: "Tiket yang Anda pilih telah dihapus.",
        },
        notification: {
          message: "Pesan dari",
        },
        tabs: {
          open: { title: "Inbox" },
          closed: { title: "Selesai" },
          search: { title: "Cari" },
        },
        search: {
          placeholder: "Cari tiket dan pesan",
        },
        buttons: {
          showAll: "Semua",
        },
      },
      transferTicketModal: {
        title: "Transfer Tiket",
        fieldLabel: "Ketik untuk mencari pengguna",
        fieldQueueLabel: "Transfer ke Divisi",
        fieldConnectionLabel: "Transfer ke koneksi",
        fieldQueuePlaceholder: "Pilih Divisi",
        fieldConnectionPlaceholder: "Pilih koneksi",
        noOptions: "Tidak ada pengguna dengan nama tersebut",
        buttons: {
          ok: "Transfer",
          cancel: "Batal",
        },
      },
      ticketsList: {
        pendingHeader: "Menunggu",
        assignedHeader: "Dilayani",
        noTicketsTitle: "Tidak ada di sini!",
        noTicketsMessage:
          "Tidak ada tiket ditemukan dengan status atau istilah yang dicari",
        connectionTitle: "Koneksi yang sedang digunakan saat ini.",
        buttons: {
          accept: "Terima",
        },
      },
      newTicketModal: {
        title: "Buat Tiket",
        fieldLabel: "Ketik untuk mencari kontak",
        add: "Tambah",
        buttons: {
          ok: "Simpan",
          cancel: "Batal",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dasbor",
          connections: "Koneksi",
          tickets: "Tiket",
          contacts: "Kontak",
          quickAnswers: "Jawaban Cepat",
          queues: "Divisi",
          administration: "Pengaturan",
          users: "Pengguna",
          kasirvip: "Kasir VIP",
          settings: "Pengaturan",
        },
        appBar: {
          user: {
            profile: "Profil",
            logout: "Keluar",
          },
        },
      },
      notifications: {
        noTickets: "Tidak ada notifikasi.",
      },
      queues: {
        title: "Divisi",
        table: {
          name: "Nama",
          color: "Warna",
          greeting: "Pesan sambutan",
          actions: "Tindakan",
        },
        buttons: {
          add: "Tambah Divisi",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage:
            "Apakah Anda yakin? Tindakan ini tidak dapat dibatalkan! Tiket di Divisi ini akan tetap ada, tetapi tidak akan memiliki Divisi yang ditugaskan lagi.",
        },
      },
      queueSelect: {
        inputLabel: "Divisi",
      },
      quickAnswers: {
        title: "Jawaban Cepat",
        table: {
          shortcut: "Pintasan",
          message: "Jawaban Cepat",
          actions: "Tindakan",
        },
        buttons: {
          add: "Tambah Jawaban Cepat",
        },
        toasts: {
          deleted: "Jawaban Cepat berhasil dihapus.",
        },
        searchPlaceholder: "Cari...",
        confirmationModal: {
          deleteTitle:
            "Anda yakin ingin menghapus Jawaban Cepat ini: ",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
        },
      },
      users: {
        title: "Pengguna",
        table: {
          name: "Nama",
          email: "Email",
          profile: "Profil",
          whatsapp: "Koneksi Standar",
          actions: "Tindakan",
        },
        buttons: {
          add: "Tambah pengguna",
        },
        toasts: {
          deleted: "Pengguna berhasil dihapus.",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage:
            "Semua data pengguna akan hilang. Tiket yang dibuka oleh pengguna ini akan dipindahkan ke Divisi.",
        },
      },
      settings: {
        success: "Pengaturan berhasil disimpan.",
        title: "Pengaturan",
        settings: {
          userCreation: {
            name: "Pembuatan pengguna",
            options: {
              enabled: "Diaktifkan",
              disabled: "Dinonaktifkan",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Ditugaskan kepada:",
          buttons: {
            return: "Kembali",
            resolve: "Selesai",
            reopen: "Buka Kembali",
            accept: "Terima",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Ketik pesan atau tekan ''/'' untuk menggunakan jawaban cepat yang telah didaftarkan",
        placeholderClosed:
          "Buka kembali atau terima tiket ini untuk mengirim pesan.",
        signMessage: "Ttd",
      },
      contactDrawer: {
        header: "Data kontak",
        buttons: {
          edit: "Ubah kontak",
        },
        extraInfo: "Informasi tambahan",
      },      
      ticketOptionsMenu: {
        delete: "Hapus",
        transfer: "Transfer",
        confirmationModal: {
          title: "Hapus tiket kontak",
          titleFrom: "Dari",
          message:
            "Perhatian! Semua pesan yang terkait dengan tiket akan hilang.",
        },
        buttons: {
          delete: "Hapus",
          cancel: "Batal",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Batal",
        },
      },
      messageOptionsMenu: {
        delete: "Hapus",
        reply: "Balas",
        confirmationModal: {
          title: "Hapus pesan?",
          message: "Tindakan ini tidak bisa dibatalkan.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Harus ada setidaknya satu WhatsApp standar.",
        ERR_NO_DEF_WAPP_FOUND:
          "Tidak ada WhatsApp standar yang ditemukan. Periksa halaman koneksi.",
        ERR_WAPP_NOT_INITIALIZED:
          "Sesi WhatsApp ini belum diinisialisasi. Periksa halaman koneksi.",
        ERR_WAPP_CHECK_CONTACT:
          "Tidak dapat memeriksa kontak WhatsApp. Periksa halaman koneksi",
        ERR_WAPP_INVALID_CONTACT: "Ini bukan nomor Whatsapp yang valid.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Tidak bisa mengunduh media dari WhatsApp. Periksa halaman koneksi.",
        ERR_INVALID_CREDENTIALS:
          "Kesalahan otentikasi. Silakan coba lagi.",
        ERR_SENDING_WAPP_MSG:
          "Kesalahan saat mengirim pesan WhatsApp. Periksa halaman koneksi.",
        ERR_DELETE_WAPP_MSG: "Tidak bisa menghapus pesan WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Sudah ada tiket terbuka untuk kontak ini.",
        ERR_SESSION_EXPIRED: "Sesi telah kedaluwarsa. Silakan masuk.",
        ERR_USER_CREATION_DISABLED:
          "Pembuatan pengguna telah dinonaktifkan oleh administrator.",
        ERR_NO_PERMISSION: "Anda tidak memiliki izin untuk mengakses sumber daya ini.",
        ERR_DUPLICATED_CONTACT: "Sudah ada kontak dengan nomor ini.",
        ERR_NO_SETTING_FOUND: "Tidak ada pengaturan yang ditemukan dengan ID ini.",
        ERR_NO_CONTACT_FOUND: "Tidak ada kontak yang ditemukan dengan ID ini.",
        ERR_NO_TICKET_FOUND: "Tidak ada tiket yang ditemukan dengan ID ini.",
        ERR_NO_USER_FOUND: "Tidak ada pengguna yang ditemukan dengan ID ini.",
        ERR_NO_WAPP_FOUND: "Tidak ada WhatsApp yang ditemukan dengan ID ini.",
        ERR_CREATING_MESSAGE: "Kesalahan saat membuat pesan di basis data.",
        ERR_CREATING_TICKET: "Kesalahan saat membuat tiket di basis data.",
        ERR_FETCH_WAPP_MSG:
          "Kesalahan saat mengambil pesan di WhatsApp, mungkin itu terlalu lama.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Warna ini sudah digunakan, pilih yang lain.",
        ERR_WAPP_GREETING_REQUIRED:
          "Pesan sambutan adalah wajib ketika ada lebih dari satu Divisi.",
      },
    },
  },
};
      
export { messages };
