//LINE GRAPH///

var traffic = document.getElementById("traffic");

var weeklydata = {
	labels: ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
	datasets: [ {
	fill: true,
	backgroundColor: "rgba(209, 210, 249,0.5)",
	pointStyle: "circle",
	lineTension: 0,
	pointRadius: 5,
	pointBackgroundColor: "white",
	pointBorderWidth: 3,
	pointBorderColor: "rgb(209, 210, 249)",
	data: [0,500,1000,750,1250,1500,1250,1500,1000,1500,2000,1500,2000]
	}]
}
var lineOptions = {
		responsive: true,
		maintainAspectRatio: true,
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 0,
					max: 2500,
					stepSize: 500
				},
				gridLines: {
					offsetGridLines: true
				}
			}]
		},
		showScale: false
	};
var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: lineOptions
});
//BAR GRAPH//
var bardata = {
	labels: ["S","M","T","W","T","F","S"],
	datasets: [{
		label: "Daily Traffic Week 1",
		backgroundColor: "#5e5eba",
		data: [75,100,150,115,225,110,75]
	},{
		label: "Daily Traffic Week 2",
		backgroundColor: "#aa7fcb",
		data: [80,90,125,250,250,200,190]
	}]

};

var dailyTraffic = document.getElementById("dailytraffic");
var barChart = new Chart(dailyTraffic, {
	type: 'bar',
	data: bardata,
	options: {
		responsive: true,
		maintainAspectRatio: true,
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					type: "logarithmic",
					min: 0,
					max: 250,
					beginAtZero: true,
					stepSize: 50
				}
			}],
			xAxes: [{
				barPecentage: 0.2
			}]
		},
		gridLines: {
			offsetGridLines: false
		}
	}
});
//PIE CHART
var mobileUsersData = {
	label: "Mobile Users",
	labels: ["Android","iOS","Other Mobile Devices","Desktops"],
	datasets: [{
		data: [10,10,10,20],
		backgroundColor: ["rgb(45, 185, 91)","rgb(63, 166, 166)","rgb(100, 100, 180)","#aa7fcb"]
	}]
}
var pieChart = document.getElementById("mobileusers");
var mobileUsers = new Chart(pieChart,{
	type: 'pie',
	data: mobileUsersData,
	options: {
		cutoutPercentage: 50,
		legend: {
			display: true,
			position: "right",
			labels: {
				fontSize: 24
			}
		},
		responsive: true,
	}
});
//change line chart
$("#hour").click(function(){
	weeklydata.labels = ["0-4","5-9","10-4","15-19","20-24"];
	weeklydata.datasets[0].data = [500,750,1250,2500,750];
	var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: lineOptions
});
});
$("#week").click(function(){
	weeklydata.labels = ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"];
	weeklydata.datasets[0].data = [0,500,1000,750,1250,1500,1250,1500,1000,1500,2000,1500,2000];
	var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: lineOptions
});
});
$("#day").click(function(){
	weeklydata.labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	weeklydata.datasets[0].data = [1000,1100,1240,1130,900,950,1200,1100,2200,2220,2300,2350,2000,1999,2231,1199,790,760,1234,1243,1500,1600,1700,1900,2000,2001,2002,2003,2004,2005,2006];
	var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: lineOptions
});
});
$("#month").click(function(){
	weeklydata.labels = ["Jan","Feb","Mar","May","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	weeklydata.datasets[0].data = [1250,1100,2300,2200,1900,1200,1100,900,750,500,550,700];
	var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: lineOptions
});
});





//remove alert box on click
var alertMessages = ["This is the first alert","This is the second alert"];
var numberOfAlerts = alertMessages.length + 1;
var clicked = true;

$(".bell").click(function(){
	if (clicked) {
		$(".x").off("click",clickOnX);
		for (var i = 0; i < alertMessages.length; i++){
			var newAlert = "<div class='alertbox'>";
			newAlert += "<p class='message'>" + alertMessages[i] + "</p>";
			newAlert += "<p class='x'>x</x>";
			$(".alert").append($(newAlert));
		}	
		 $(".x").click(clickOnX);
		clicked = !clicked;
	}
});

$(".x").click(clickOnX);

function clickOnX(){
	$(this).parent().remove();
	numberOfAlerts--;
	console.log(numberOfAlerts);
	if (numberOfAlerts === 0){$(".alertcircle").hide();}
}
//SUBMIT///
$("#user").on("focus",function(){
	$(".submission").text("");
})
$("#message").on("focus",function(){
	$(".submission").text("");
})

$(".send").click(function(event){
	event.preventDefault();
	if($("#user").val() === ""){
		$(".submission").text("Please select a user");
	}
	else if  ($("#message").val() === "") {
		$(".submission").text("Please write a message");
	}
	else{
		$(".submission").text("You sent your message");
		$("#user").val("");
		$("#message").val("");
	}
});
///AUTOCOMPLETE FEATURE //// 
$("#user").autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ["Victoria Chambers","Dale Byrd","Dawn Wood","Dan Olivers"];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

//LOCAL STORAGE///
var email = false,
	profile = false;
$("#send-email").click(function(){
	email =! email;
});
$("#public").click(function(){
	profile =! profile;
});
$(".save").click(function(){
	localStorage.setItem("email",email);
	localStorage.setItem("public",profile);
	localStorage.setItem("timezone",$("select").val());
	alert("Settings Saved");
});

if (typeof(Storage) !== "undefined"){
	email = localStorage.getItem("email");
	profile = localStorage.getItem("public");
	timezone = localStorage.getItem("timezone");
	if (email === "true") {
		$("#send-email").trigger("click");
	}
	if (profile === "true"){
		$("#public").trigger("click");
	}
	$("select").val(timezone);
}
