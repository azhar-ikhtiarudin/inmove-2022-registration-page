function postToGoogle() {
    var NamaTim = $("#NamaTim").val();
    var JenisLomba = $("#multiple-choice").val();
    var Judul = $("#Judul").val();
    var NamaKetua = $("#NamaKetua").val();
    var NIMKetua = $("#NIMKetua").val();
    var WAKetua = $("#WAKetua").val();
    var EmailKetua = $("#EmailKetua").val();
    var JurusanKetua = $("#JurusanKetua").val();

    var NamaAnggota1 = $("#NamaAnggota1").val();
    var NIMAnggota1 = $("#NIMAnggota1").val();
    var WAAnggota1 = $("#WAAnggota1").val();
    var EmailAnggota1 = $("#EmailAnggota1").val();
    var JurusanAnggota1 = $("#JurusanAnggota1").val();

    var NamaAnggota2 = $("#NamaAnggota2").val();
    var NIMAnggota2 = $("#NIMAnggota2").val();
    var WAAnggota2 = $("#WAAnggota2").val();
    var EmailAnggota2 = $("#EmailAnggota2").val();
    var JurusanAnggota2 = $("#JurusanAnggota2").val();

    var NamaAnggota3 = $("#NamaAnggota3").val();
    var NIMAnggota3 = $("#NIMAnggota3").val();
    var WAAnggota3 = $("#WAAnggota3").val();
    var EmailAnggota3 = $("#EmailAnggota3").val();
    var JurusanAnggota3 = $("#JurusanAnggota3").val();

    var NamaAnggota4 = $("#NamaAnggota4").val();
    var NIMAnggota4 = $("#NIMAnggota4").val();
    var WAAnggota4 = $("#WAAnggota4").val();
    var EmailAnggota4 = $("#EmailAnggota4").val();
    var JurusanAnggota4 = $("#JurusanAnggota4").val();

    $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScJGXaUDsP8eSCdeWI8WgIYEi1hGdjYqGV7c9Oy07AhV0yq4A/formResponse",
    data: {
        "entry.1581661742": NamaTim,
        "entry.341280249": JenisLomba,
        "entry.1114922784": Judul,
        "entry.1997334444": NamaKetua,
        "entry.1521541460": NIMKetua,
        "entry.555038672": WAKetua,
        "entry.23042440": EmailKetua,
        "entry.1727905460": JurusanKetua,
        "entry.1262363675": NamaAnggota1,
        "entry.2101437308": NIMAnggota1,
        "entry.1869623170": WAAnggota1,
        "entry.866114325": EmailAnggota1,
        "entry.53220122": JurusanAnggota1,
        "entry.760502139": NamaAnggota2,
        "entry.741185228": NIMAnggota2,
        "entry.1936969774": WAAnggota2,
        "entry.1438802705": EmailAnggota2,
        "entry.142234712": JurusanAnggota2,
        "entry.56138041": NamaAnggota3,
        "entry.2129012810": NIMAnggota3,
        "entry.714190766": WAAnggota3,
        "entry.1393543942": EmailAnggota3,
        "entry.1172521898": JurusanAnggota3,
        "entry.291610768": NamaAnggota4,
        "entry.1485450429": NIMAnggota4,
        "entry.2092183236": WAAnggota4,
        "entry.305481678": EmailAnggota4,
        "entry.1470841958": JurusanAnggota4,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
        $('#registration').trigger('reset');
    },
    error: function (x, y, z) {
        $('#registration').trigger('reset');
    }
    });
    
    return false;
}