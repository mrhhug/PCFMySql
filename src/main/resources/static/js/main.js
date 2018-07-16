$('#add-btn').click(function() {
    var name=$('#name').val();
    var specialty=$('#specialty').val();
    var singer=$('#singer').is(':checked');
    var url="api/add/" + name + "/" + specialty + "/" + singer;
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: 'PUT',
        url: url,
        success: function(result){
            $('.response-body').html("ok");
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        },
    });
});
$('#addorupdate-btn').click(function() {
    var id=$('#id').val();
    var name=$('#name').val();
    var specialty=$('#specialty').val();
    var singer=$('#singer').is(':checked');
    var url="api/addOrUpdate/" + id + "/" + name + "/" + specialty + "/" + singer;
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
    if ( id == "" ) {
        $('.response-body').html('Please enter an id.');
    } else {
        $.ajax({
            type: 'PUT',
            url: url,
            success: function(result){
                $('.response-body').html("ok");
            },
            error: function(xhr, status, error) {
                $('.response-body').html(
                    "status: " + status + "<br>" +
                    "error: " + error + "<br>" +
                    "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
                );
            },
        });
    }
});
$('#addthegreatfuldead-btn').click(function() {
    var url="/api/GodBlessTheGreatfulDead";
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: 'PUT',
        url: url,
        success: function(result){
            $('.response-body').html("ok");
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        },
    });
});
$('#getbyid-btn').click(function() {
    var id=$('#id').val();
    var url="api/get/" + id;
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
    if ( id == "" ) {
        $('.response-body').html('Please enter an id.');
    } else {
        $.ajax({
            type: 'GET',
            url: url,
            success: function(result){
		var ret = "<table><tr><th>id</th><th>Name</th><th>Specialty</th><th>Singer</th></tr>"
            	if (result) {
			ret += "<tr><td>"+result["id"]+"</td><td>"+result["name"]+"</td><td>"+result["specialty"]+"</td><td><input type='checkbox' disabled ";
			ret += "checked"	
			ret +="></td></tr>";
            	}
            ret += "</table>"
            $('.response-body').html(ret);
            },
            error: function(xhr, status, error) {
                $('.response-body').html(
                    "status: " + status + "<br>" +
                    "error: " + error + "<br>" +
                    "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
                );
            },
	    datatype: 'json'
        });
    }
});
$('#getall-btn').click(function() {
    var url="api/getAll/";
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
        $.ajax({
        type: 'GET',
        url: url,
        success: function(result){
	    var ret = "<table><tr><th>id</th><th>Name</th><th>Specialty</th><th>Singer</th></tr>"
            for (i in result) {
                ret += "<tr><td>"+result[i]["id"]+"</td><td>"+result[i]["name"]+"</td><td>"+result[i]["specialty"]+"</td><td><input type='checkbox' disabled ";
		if(result[i]["singer"]) {
			ret += "checked"	
		}
		ret +="></td></tr>";
            }
            ret += "</table>"
            $('.response-body').html(ret);
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        },
	datatype: 'json'
    });
});
$('#deletebyid-btn').click(function() {
    var id=$('#id').val();
    var url="api/delete/" + id;
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
    if ( id == "" ) {
        $('.response-body').html('Please enter an id.');
    } else {
        $.ajax({
            type: 'DELETE',
            url: url,
            success: function(result){
            	$('.response-body').html("ok");
            },
            error: function(xhr, status, error) {
                $('.response-body').html(
                    "status: " + status + "<br>" +
                    "error: " + error + "<br>" +
                    "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
                );
            },
        });
    }
});
$('#deleteall-btn').click(function() {
    var url="api/deleteAll/";
    console.log("Calling: " + url);
    $('.response-body').html('Calling REST endpoint');
        $.ajax({
        type: 'DELETE',
        url: url,
        success: function(result){
            $('.response-body').html("ok");
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        },
    });
});
//https://stackoverflow.com/a/7220510
function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
