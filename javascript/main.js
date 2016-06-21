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
var weekly = new Chart(traffic,{
	type: 'line',
	data: weeklydata,
	options: {
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
	},
});
//BAR GRAPH//
var bardata = {
	labels: ["S","M","T","W","T","F","S"],
	datasets: [{
		label: "Daily Traffic",
		backgroundColor: "#5e5eba",
		data: [75,100,150,115,225,110,75]
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
	labels: ["Phones","Tablets","Desktops"],
	datasets: [{
		data: [50,100,300],
		backgroundColor: ["rgb(45, 185, 91)","rgb(63, 166, 166)","rgb(100, 100, 180)"]
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

////ALERT/////
//remove alert box on click
$(".x").click(function(){
	$(".alert").hide();
	$(".alertcircle").hide();
});

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
})