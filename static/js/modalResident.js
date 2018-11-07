
    $("#residentsButton" + planet.name.toString()).click(function(){

        let tableHeader = $("<tr></tr>").html(
                "<th> Name </th>" +
                "<th> Height</th>" +
                "<th> Mass </th>" +
                "<th> Hair color </th>" +
                "<th> Skin color </th>" +
                "<th> Eye color </th>" +
                "<th> Birth year </th>" +
                "<th> Gender </th>"
                );

        $("#residentModalLabel").text("Residents of " + planet.name.toString());
        $("#tableModal").empty().append(tableHeader);


        $.getJSON("", function(response){

            let tableRow = $("<tr></tr>").html(
            "<td>" + response.name + "</td>" +
            "<td>" + response.height + "</td>" +
            "<td>" + response.mass + "</td>" +
            "<td>" + response.hair_color + "</td>" +
            "<td>" + response.skin_color + "</td>" +
            "<td>" + response.eye_color + "</td>" +
            "<td>" + response.birth_year + "</td>" +
            "<td>" + response.gender + "</td>");

            $("#tableModal").append(tableRow)
        });
    });
