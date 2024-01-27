window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {
            labels: {
                placeholder: "Ara",
                searchTitle: "Tabloda arama yap",
                perPage: "Sayfa basina kayit",
                noRows: "Kayit bulunamadi",
                info: "{rows} adet kayittan [ {start} - {end} ] arasi goruntuleniyor",
                noResults: "Arama sorgunuzla ilgili kayit bulunamadi",
            },
            columnDefs: [
                { width: 100, targets: 0 }
            ],
            fixedColumns: false
        });
        
    }
});
