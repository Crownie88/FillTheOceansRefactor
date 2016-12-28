
var msie;
msie = window.document.documentMode;

if (typeof(msie)=="number"){
	var htmltxt = "<h1 style='color:#ffffff'>Fill The Oceans</h1><p style='color:#ffffff'>Fill the oceans is a game that uses CSS3 and advanced javascript that is not supported by Internet Explorer.</p>";
	htmltxt += "<p style='color:#ffffff'>Fill The Oceans should work with all recent major other browsers like: Chrome, Firefox, Opera and Edge</p> <p  style='color:#ffffff'>Sorry for this inconvenience.</p>";
	document.getElementById("body").innerHTML=htmltxt;
}

var Game = {
		version:"0.1.13",
		interval: 50,     
		decimals: 0,      
		
		loadedgame:0,
		reload:0,
		first_start: Date.now(),
		run_start: Date.now(),
		drops_in_bank: 0,      
		total_drops_produced: 0,
		total_ever:0,
		drops_in_ocean: 0,
		oceanPerc: 0,
		max_drops_in_ocean : 150000000000000000000000000,
		max_drops_in_ocean_a : 150000000000000000000000000,
		max_drops_in_ocean_b: 150000000000000000000000000000000000,
		max_drops_in_ocean_c: 999999999999999999999999999999999999999999999999999,
		click_num :1,
		click_num_perc : 0,
		click_num_tot : 1,
		cps_cur : 0,
		handmade_clicks: 0,
		handmade_drops: 0,
		textnum: 1,
		cloudstart:320000,
		
		cloudend:640000,
		
		cloudduration:15000,
		cloudvisible:0,
		storm:0,
		turbo:0,
		wrath:0,
		stormduration:77000,
		turboduration:60000,
		wrathduration:11000,
		clickStorm: 0,
		clickStormduration: 10000,
		noticequantity:0,
		cloudsclicked:0,
		wp:0,
		sunactive:0,
		totalmultiplier:0,
		hasWebP: 0,
		experience: 0,
		knowhow: 0,
		experiencePerc: 0,
		knowhowPerc: 20,
		sunstart: 120000,
		sunend: 240000,
		sunduration: 15000,
		sunvisible: 0,
		sunclick: 0,
		sunloss: 100000000000000000000000,
		alienNumber: 0,
		newAlienBegin: 150000,
	
		newAlienEnd: 300000,
	
		alienDrain: 0,
		totalDropsDrained: 0,
		animateDropActive: 0,
		alientechNum: 0,
		aliencontact: 0,
		contactDuration: 1800,
	
		achievementsUnlocked: 0,
		upgradesBought: 0,
		upgradesPerc: 0,
		achievementsPerc: 0,
		lemonade: 0,
		totalBuildings: 0,
		oldExperiencePoints:0,
		cloudupgradelevel: 1,
		alienupgradelevel: 1,
		alienDrainPerc: 6,
		waterLevel:1,
		oldwaterLevel:1,
		buyMode: 1,
		buyBulk: 1,
		cloudjclicked: 0,
		numberOption:0,
		cloudSoundOption:0,
		storeopen:0,
		slideactive:0,
		slidetimer:0,
		statsopen:0,
		winInnerWidth: 0,
		useknowhow: 0,
		dragstarposx: 0,
		dragstarposy: 0,
		littledropOption: 1,
		animateTextOption: 1,
		bgdropsOption: 1,
		maxbgdrops: 0,
		wavesanimation: 0,
		totalupgrades: 0,
		alientechStrength: 1,
		sacrificeLevel: 0,
		sacrificeDivActive: 0,
		sacrificeDivHover: 0,
		timelaga: Date.now(),
		timelagb: 0,
		offlineperc: 20,
		offlinetime: 43200000,
		lastsavetime: 0,
		filloceanoption: 1,
		spinningbgoption: 1,
		oceanLog: 0,
		crazyscientistnum:0,
		crazyscientistsboost: 0,
		alienDrainOffline: 0,
		firstwater:0,
		oldperctxt:0,
		oldpercbar:0,
		cpsDisplayColor:0,
		weatherstationLevel:0,
		upgradeWeatherstationDivActive: 0,
		upgradeWeatherstationDivHover: 0,
		
		// Minigame poseidon
		poseidonStarted: 0,
		pFoodTotal: 0,
		pFoodMaxCap: 200,
		pLeatherTotal: 0,
		pLeatherCounter: 0,
		pWoodTotal: 0,
		pWoodMaxCap: 200,
		pFoodBarnCost: 100,
		pWoodBarnCost: 100,
		pStoneTotal: 0,
		pStoneMaxCap: 200,
		pStoneBarnCostWood: 20,
		pStoneBarnCostStone: 100,
		pTentTotal: 0,
		pTentCostLeather: 2,
		pTentCostWood: 2,
		pWoodenhouseTotal: 0,
		pWoodenhouseCostLeather: 1,
		pWoodenhouseCostWood: 20,
		pWoodenhouseBuildersReq: 2,
		pStonehouseTotal: 0,
		pStonehouseCostLeather: 1,
		pStonehouseCostWood: 10,
		pStonehouseCostStone: 30,
		pStonehouseBuildersReq: 5,
		pBuildersIdle: 0,
		pBuildersWorking: 0,
		pWorkerTotal: 0,
		pWorkerCostFood: 20,
		pWorkerIdle: 0,
		pFarmerTotal: 0,
		pWoodcutterTotal: 0,
		pStonecutterTotal: 0,
		pFarmerProduce: 1.2,
		pWoodcutterProduce: 0.5,
		pStonecutterProduce: 0.2,
		pWorkerDie: 0,
		pFoodShortage: 0,
		pTempleTotal: 0,
		pTempleCostWood: 50,
		pTempleCostStone: 100,
		pTempleBuildersReq: 20,
		pWorkerMaxCap: 0,
		// End Minigame poseidon
		
		animateDropTimer: undefined,
		
		// DOM elements
		container:undefined,
		waves: undefined,
		saveButton: undefined,
		resetButton: undefined,
		exportButton: undefined,
		importButton: undefined,
		button: undefined,
		dropContainer: undefined,
		buttonOcean:undefined,
		count: undefined,
		store: undefined,
		upgradestore:undefined,
		achievementsStore: undefined,
		cpsDisplay: undefined,
		totalcount: undefined,
		dropsInOcean: undefined,
		percentageDropsInOcean: undefined,
		progressBar:undefined,
		boughtUpgrades: undefined,
		dropsInBankStats: undefined,
		dropsPerSecondStats:undefined,
		dropsPerClickStats: undefined,
		handmadeClicksStats: undefined,
		handmadeDropsStats: undefined,
		dropsInOceanStats: undefined,
		percentageDropsInOceanStats: undefined,
		multiplierStats: undefined,
		experienceStats: undefined,
		cloudclicksStats: undefined,
		knowhowstats: undefined,
		totaleverStats: undefined,
		cloud: undefined,
		sun: undefined,
		stormTimer: undefined,
		clickStormTimer: undefined,
		turboTimer:undefined,
		wrathTimer:undefined,
		notices: undefined,
		dropbgimagea: undefined,
		experienceProgress: undefined,
		experienceNum: undefined,
		intro: undefined,
		sunclicks: undefined,
		tabStats: undefined,
		tabOptions: undefined,
		alertNot: undefined,
		alertNotTxt: undefined,
		knowhowButton: undefined,
		endastartoverButton: undefined,
		endahelpButton: undefined,
		endbstartoverButton: undefined,
		endbinfinityButton: undefined,
		alienContainer: undefined,
		drainedStats: undefined,
		contactStats: undefined,
		contactP: undefined,
		totalAchievements: undefined,
		unlockedAchievements: undefined,
		totalUpgrades: undefined,
		boughtUpgradesTxt: undefined,
		upgradesPercTxt: undefined,
		achievementsPercTxt: undefined,
		knowhowScreen: undefined,
		knowhowStartButton: undefined,
		knowhowscreenExpStats: undefined,
		knowhowscreenKnowhowStats: undefined,
		lifeupgradeA: undefined,
		lifeupgradeB: undefined,
		lifeupgradeC: undefined,
		lifeupgradeD: undefined,
		cloudupgradeA: undefined,
		cloudupgradeB: undefined,
		cloudupgradeC: undefined,
		cloudupgradeD: undefined,
		alienupgradeA: undefined,
		alienupgradeB: undefined,
		alienupgradeC: undefined,
		alienupgradeD: undefined,
		mtnEewLevel:undefined,
		buyOneButton: undefined,
		buyTenButton: undefined,
		buyHundredButton: undefined,
		firstStart: undefined,
		runStart: undefined,
		cookieBanner: undefined,
		cookieButton: undefined,
		numberOptionButton: undefined,
		dropsToNextExpStat: undefined,
		cloudSoundOptionButton: undefined,
		volumeSlider: undefined,
		volumePerc: undefined,
		alienDrainStat: undefined,
		alienDrainStats:undefined,
		openStoreButton:undefined,
		storeContainer:undefined,
		closeStoreButton:undefined,
		statsContainer:undefined,
		openStatsButton:undefined,
		closeStatsButton:undefined,
		knowhowUpgradesDiv:undefined,
		knowhowDrag:undefined,
		dragstarDiv: undefined,
		superdragDiv: undefined,
		littledropoptionButton: undefined,
		animatetextoptionButton: undefined,
		bgdropoptionButton: undefined,
		outerWaves: undefined,
		poseidonImage: undefined,
		templeImage: undefined,
		poseidonSacrifice: undefined,
		sacrificeDiv: undefined,
		poseidonSacrificeCloseButton: undefined,
		prayerSelectDiv: undefined,
		prayerDiv:undefined,
		prayerSelectDivCloseButton: undefined,
		spindropOptionButton: undefined,
		mtneewprogress: undefined,
		weatherstationImage: undefined,
		weatherstationDiv: undefined,
		weatherstationDivCloseButton: undefined,
		upgradeweatherstationDiv: undefined,
		
		handle: undefined,
		handleother: undefined,
		handlesave: undefined,
		knowhowtimer: undefined,
		handlebgdrops: undefined,
				
		// Minigame poseidon
		
		poseidonStart: undefined,
		poseidonEnd: undefined,
		poseidonStartCloseButton: undefined,
		poseidonStartStartButton: undefined,
		poseidonBacktogameButton: undefined,
		poseidonMinigame: undefined,
		pFoodImage: undefined,
		pWoodImage: undefined,
		pStoneImage: undefined,
		pFoodTotalStat: undefined,
		pWoodTotalStat: undefined,
		pStoneTotalStat: undefined,
		pLeatherTotalStat: undefined,
		pFoodBarnImage: undefined,
		pWoodBarnImage: undefined,
		pStoneBarnImage: undefined,
		pFoodBarnCapStat: undefined,
		pFoodBarnCostStat: undefined,
		pWoodBarnCapStat: undefined,
		pWoodBarnCostStat: undefined,
		pStoneBarnCapStat: undefined,
		pStoneBarnCostWoodStat: undefined,
		pStoneBarnCostStoneStat: undefined,
		pTentImage: undefined,
		pWoodenhouseImage: undefined,
		pStonehouseImage: undefined,
		pTentStat: undefined,
		pWoodenhouseTD: undefined,
		pWoodenhouseStat: undefined,
		pStonehouseTD: undefined,
		pStonehouseStat: undefined,
		pWorkerImage: undefined,
		pWorkerStat: undefined,
		pWorkerIdleStat: undefined,
		pWorkerDieStat: undefined,
		pFarmerMinButton: undefined,
		pFarmerPlusButton: undefined,
		pWoodcutterMinButton: undefined,
		pWoodcutterPlusButton: undefined,
		pStonecutterMinButton: undefined,
		pStonecutterPlusButton: undefined,
		pBuilderMinButton: undefined,
		pBuilderPlusButton: undefined,
		pFarmerStat: undefined,
		pWoodcutterStat: undefined,
		pStonecutterStat: undefined,
		pbuilderStat: undefined,
		pBuildersIdleStat: undefined,
		pBuildersWorkingStat: undefined,
		pTempleImage: undefined,
		pTempleCostWoodStat: undefined,
		pTempleCostStoneStat: undefined,
		pTempleTimeTD: undefined,
		pTempleStat: undefined,
		pWorkerMaxCapStat: undefined,
		pCongratulationsDiv: undefined,
		// End Minigame poseidon
		
		buildings: [],
		upgrades: [],
		upgrades_sorted: [],
		achievements: [],
		knowhowupgrades: [],
		prayers: [],
		
		channel_max: 10,										// number of channels
		audiochannels: [],
		
		
		aliens: [
			{id:1, startpos:300, angle:67, hover:"hovera hovera-constant"},
			{id:2, startpos:300, angle:95, hover:"hoverb hoverb-constant"},
			{id:3, startpos:300, angle:123, hover:"hoverc hoverc-constant"},
			{id:4, startpos:300, angle:151, hover:"hoverd hoverd-constant"},
			{id:5, startpos:300, angle:180, hover:"hovere hovere-constant"},
			{id:6, startpos:-300, angle:-151, hover:"hoverf hoverf-constant"},
			{id:7, startpos:-300, angle:-123, hover:"hoverg hoverg-constant"},
			{id:8, startpos:-300, angle:-95, hover:"hoverh hoverh-constant"},
			{id:9, startpos:-300, angle:-67, hover:"hoveri hoveri-constant"}
			],
		
		aliensList: [],
		
		aliensPopList: [],
		
		
		init: function(_buildings, _upgrades, _achievements) {
			var self = this;
			
			document.title = "Fill The Oceans - v. "+ this.version +" beta";
			$('#version2').text(this.version);

			// -- Cache DOM elements
			this.container = $('#containera');
			this.waves = $('#center-container');
			this.saveButton = $('#save');
			this.resetButton = $('#reset');
			this.exportButton = $('#export');
			this.importButton = $('#import');
			this.startButton = $('#start');
			this.button = $('#produce-drop');
			this.dropContainer = $('#dropcontainer');
			this.buttonOcean = $('#fill-ocean');
			this.count = $('#drop-count');
			this.store = $('#store-container');
			this.upgradestore = $('#upgradestore');
			this.achievementsStore = $('#achievements-store');
			this.cpsDisplay = $('#cps');
			this.totalcount = $('#total_amount_produced_stats');
			this.dropsInOcean = $('#drops-in-ocean');
			this.percentageDropsInOcean = $('#percentage-drops-in-ocean');
			this.progressBar = $('#progressbarinside');
			this.boughtUpgrades = $('#bought-upgrades');
			this.dropsInBankStats = $('#drops_in_bank_stats');
			this.dropsPerSecondStats = $('#drops_per_second_stats');
			this.dropsPerClickStats = $('#drops_per_click_stats');
			this.handmadeClicksStats = $('#hand-made_clicks_stats');
			this.handmadeDropsStats = $('#hand-made_drops_stats');
			this.dropsInOceanStats = $('#drops_in_ocean_stats');
			this.percentageDropsInOceanStats = $('#percentage_drops_in_ocean_stats');
			this.multiplierStats = $('#multiplier_stats');
			this.experienceStats = $('#experience_stats');
			this.cloudclicksStats = $('#cloudclicks_stats');
			this.knowhowStats = $('#knowhow_stats');
			this.totaleverStats = $('#total_ever_stats');
			this.cloud = $('#cloud');
			this.sun = $('#sun');
			this.stormTimer = $('#stormtimer');
			this.clickStormTimer = $('#clickstormtimer');
			this.turboTimer = $('#turbotimer');
			this.wrathTimer = $('#wrathtimer');
			this.notices = $('#notices');
			this.dropbgimagea = $('#dropbgimagea');
			this.experienceProgress = $('#exp_progress_level');
			this.experienceNum = $('#experience_num');
			this.intro = $('#intro');
			this.sunclicks = $('#sunclicks');
			this.tabStats = $('#tabstats');
			this.tabOptions = $('#taboptions');
			this.alertNot = $('#alertnot');
			this.alertNotTxt = $('#alertnotcontent');
			this.knowhowButton = $('#knowhow_button');
			this.endastartoverButton = $('#endastartover');
			this.endahelpButton = $('#endahelp');
			this.endbstartoverButton = $('#endbstartover');
			this.endbinfinityButton = $('#endbinfinity');
			this.alienContainer = $('#aliencontainercenter');
			this.drainedStats = $('#drainedstats');
			this.contactStats = $('#contact_stats');
			this.contactP = $('#contactp');
			this.totalAchievements= $('#total_achievements');
			this.unlockedAchievements= $('#unlocked_achievements');
			this.totalUpgrades = $('#total_upgrades');
			this.boughtUpgradesTxt = $('#bought_upgrades_txt');
			this.upgradesPercTxt = $('#upgrades_perc');
			this.achievementsPercTxt = $('#achievements_perc');
			this.knowhowScreen = $('#knowhowscreen');
			this.knowhowStartButton = $('#knowhowstart');
			this.knowhowscreenExpStats = $('#knowhowscreen_exp_stats');
			this.knowhowscreenKnowhowStats = $('#knowhowscreen_knowhow_stats');
			this.lifeupgradeA = $('#lifeupgrade_a');
			this.lifeupgradeB = $('#lifeupgrade_b');
			this.lifeupgradeC = $('#lifeupgrade_c');
			this.lifeupgradeD = $('#lifeupgrade_d');
			this.cloudupgradeA = $('#cloudupgrade_a');
			this.cloudupgradeB = $('#cloudupgrade_b');
			this.cloudupgradeC = $('#cloudupgrade_c');
			this.cloudupgradeD = $('#cloudupgrade_d');
			this.alienupgradeA = $('#alienupgrade_a');
			this.alienupgradeB = $('#alienupgrade_b');
			this.alienupgradeC = $('#alienupgrade_c');
			this.alienupgradeD = $('#alienupgrade_d');
			this.mtnEewLevel = $('#progressbarinsidemtn');
			this.buyOneButton = $('#helper_1');
			this.buyTenButton = $('#helper_10');
			this.buyHundredButton = $('#helper_100');
			this.firstStart = $('#first_start');
			this.runStart = $('#run_start');
			this.cookieBanner = $('#cookiebanner');
			this.cookieButton = $('#gotit');
			this.numberOptionButton = $('#numberOption');
			this.dropsToNextExpStat = $('#drops_to_next_exp');
			this.cloudSoundOptionButton = $('#cloudSoundOption');
			this.volumeSlider = $('#volume');
			this.volumePerc = $('#volumepercent');
			this.alienDrainStat = $('#aliendrainstat');
			this.alienDrainStats = $('#aliendrain_stats');
			this.openStoreButton = $('#storeopen');
			this.storeContainer = $('#left_container');
			this.closeStoreButton = $('#storeclose');
			this.statsContainer = $('#right_container');
			this.openStatsButton = $('#statsopen');
			this.closeStatsButton = $('#statsclose');
			this.knowhowUpgradesDiv = $('#knowhowupgrades');
			this.knowhowDrag = $('#khdrag');
			this.dragstarDiv = $('#starsdrag');
			this.superdragDiv = $('#superdrag');
			this.littledropoptionButton = $('#littledropOption');
			this.animatetextoptionButton = $('#animatetextOption');
			this.bgdropoptionButton = $('#bgdropOption');
			this.outerWaves = $('#outerwaves');
			this.poseidonSacrifice = $('#poseidonSacrifice');
			this.sacrificeDiv = $('#sacrificeDiv');
			this.poseidonSacrificeCloseButton = $('#poseidonSacrificeCloseButton');
			this.prayerSelectDiv = $('#prayerSelectDiv');
			this.prayerDiv = $('#prayerDiv');
			this.prayerSelectDivCloseButton = $('#prayerSelectDivCloseButton');
			this.spindropOptionButton = $('#spindropOption');
			this.mtneexprogress = $('#progressbarcontainermtnexpl');
			this.weatherstationImage = $('#weatherstationImage');
			this.weatherstationDiv = $('#weatherstationDiv');
			this.weatherstationDivCloseButton = $('#weatherstationDivCloseButton');
			this.upgradeweatherstationDiv = $('#upgradeWeatherstationDiv');
			
			// Minigame poseidon
			this.templeImage = $('#templeImage');
			this.poseidonImage = $('#poseidonImage');
			this.poseidonStart = $('#poseidonStart');
			this.poseidonEnd = $('#poseidonEnd');
			this.poseidonStartCloseButton = $('#poseidonStartCloseButton');
			this.poseidonStartStartButton = $('#poseidonStartStartButton');
			this.poseidonEndCloseButton = $('#poseidonEndCloseButton');
			this.poseidonEndStartButton = $('#poseidonEndStartButton');
			this.poseidonBacktogameButton = $('#poseidonBacktogameButton');
			this.poseidonMinigame = $('#poseidonMinigame');
			this.pFoodImage = $('#pFoodImage');
			this.pWoodImage = $('#pWoodImage');
			this.pStoneImage = $('#pStoneImage');
			this.pFoodTotalStat = $('#pFoodTotalStat');
			this.pWoodTotalStat = $('#pWoodTotalStat');
			this.pStoneTotalStat = $('#pStoneTotalStat');
			this.pLeatherTotalStat = $('#pLeatherTotalStat');
			this.pFoodBarnImage = $('#pFoodBarnImage');
			this.pWoodBarnImage = $('#pWoodBarnImage');
			this.pStoneBarnImage = $('#pStoneBarnImage');
			this.pFoodBarnCapStat = $('#pFoodBarnCapStat');
			this.pFoodBarnCostStat = $('#pFoodBarnCostStat');
			this.pWoodBarnCapStat = $('#pWoodBarnCapStat');
			this.pWoodBarnCostStat = $('#pWoodBarnCostStat');
			this.pStoneBarnCapStat = $('#pStoneBarnCapStat');
			this.pStoneBarnCostWoodStat = $('#pStoneBarnCostWoodStat');
			this.pStoneBarnCostStoneStat = $('#pStoneBarnCostStoneStat');
			this.pTentImage = $('#pTentImage');
			this.pWoodenhouseImage = $('#pWoodenhouseImage');
			this.pStonehouseImage = $('#pStonehouseImage');
			this.pTentStat = $('#pTentStat');
			this.pWoodenhouseTD = $('#pWoodenhouseTD');
			this.pWoodenhouseStat = $('#pWoodenhouseStat');
			this.pStonehouseTD = $('#pStonehouseTD');
			this.pStonehouseStat = $('#pStonehouseStat');
			this.pWorkerImage = $('#pWorkerImage');
			this.pWorkerStat = $('#pWorkerStat');
			this.pWorkerIdleStat = $('#pWorkerIdleStat');
			this.pWorkerDieStat = $('#pWorkerDieStat');
			this.pFarmerMinButton = $('#pFarmerMinButton');
			this.pFarmerPlusButton = $('#pFarmerPlusButton');
			this.pWoodcutterMinButton = $('#pWoodcutterMinButton');
			this.pWoodcutterPlusButton = $('#pWoodcutterPlusButton');
			this.pStonecutterMinButton = $('#pStonecutterMinButton');
			this.pStonecutterPlusButton = $('#pStonecutterPlusButton');
			this.pBuilderMinButton = $('#pBuilderMinButton');
			this.pBuilderPlusButton = $('#pBuilderPlusButton');
			this.pFarmerStat = $('#pFarmerStat');
			this.pWoodcutterStat = $('#pWoodcutterStat');
			this.pStonecutterStat = $('#pStonecutterStat');
			this.pBuilderStat = $('#pBuilderStat');
			this.pBuildersIdleStat = $('#pBuildersIdleStat');
			this.pBuildersWorkingStat = $('#pBuildersWorkingStat');
			this.pTempleImage = $('#pTempleImage');
			this.pTempleCostWoodStat = $('#pTempleCostWoodStat');
			this.pTempleCostStoneStat = $('#pTempleCostStoneStat');
			this.pTempleTimeTD = $('#pTempleTimeTD');
			this.pTempleStat = $('#pTempleStat');
			this.pWorkerMaxCapStat = $('#pWorkerMaxCapStat');
			this.pCongratulationsDiv = $('#pCongratulationsDiv');
			
			this.pFoodBarnCapStat.text(this.pFoodMaxCap);
			this.pFoodBarnCostStat.text(this.pFoodBarnCost);
			this.pWoodBarnCapStat.text(this.pWoodMaxCap);
			this.pWoodBarnCostStat.text(this.pWoodBarnCost);
			this.pStoneBarnCapStat.text(this.pStoneMaxCap);
			this.pStoneBarnCostWoodStat.text(this.pStoneBarnCostWood);
			this.pStoneBarnCostStoneStat.text(this.pStoneBarnCostStone);
			this.pTempleCostWoodStat.text(this.pTempleCostWood);
			this.pTempleCostStoneStat.text(this.pTempleCostStone);
			// End Minigame poseidon
		
			this.arrowsArray5 = [$('#arrowsdiv5'),$('#arrowsdiv5b')];
			this.arrowsArray20 = [$('#arrowsdiv20a'),$('#arrowsdiv20b')];
			this.arrowsArray21 = [$('#arrowsdiv21a'),$('#arrowsdiv21b')];
			this.arrowsArray40 = [$('#arrowsdiv40a'),$('#arrowsdiv40b')];
			
			this.arrowsArray = [$('#arrowsdiv2'),$('#arrowsdiv3'),$('#arrowsdiv4'),this.arrowsArray5, 
								$('#arrowsdiv6'), $('#arrowsdiv7'), $('#arrowsdiv8'), $('#arrowsdiv9'), 
								$('#arrowsdiv10'), $('#arrowsdiv11'), $('#arrowsdiv12'), $('#arrowsdiv13'), 
								$('#arrowsdiv14'), $('#arrowsdiv15'), $('#arrowsdiv16'), $('#arrowsdiv17'), 
								$('#arrowsdiv18'), $('#arrowsdiv19'), this.arrowsArray20, this.arrowsArray21,
								$('#arrowsdiv22'),$('#arrowsdiv23'),$('#arrowsdiv24'), $('#arrowsdiv25'),
								$('#arrowsdiv26'),$('#arrowsdiv27'),$('#arrowsdiv28'),$('#arrowsdiv29'),
								$('#arrowsdiv30'),$('#arrowsdiv31'),$('#arrowsdiv32'),$('#arrowsdiv33'),
								$('#arrowsdiv34'),$('#arrowsdiv35'),$('#arrowsdiv36'),$('#arrowsdiv37'),
								$('#arrowsdiv38'),$('#arrowsdiv39'),this.arrowsArray40, $('#arrowsdiv41')];
			
			
			this.dragstarposx = this.knowhowDrag.position().left;
			this.dragstarposy = this.knowhowDrag.position().top;
			
			
			this.mtneexprogress.hover(function() {
				
				$('#popover').html('<table><tr><td><p class="popovertitle">Mtn Eew: '+Game.achievementsPerc+'%</p><p>The percentage of achievements you get is the percentage of your Mtn Eew</p><p>The more Mtn Eew you\'ve got the better the crazy scientists work. All crazyscientists boost your drops per second with an extra '+Game.crazyscientistsboost+'%</p></td></tr></table>');
				var w = $('#popover').width()+40; 
				var posX = tempX-w;
				var posY = tempY;
				
				
				var csspos = {'top':posY, 'left':posX};
				
				
				
									
				$('#popover').css(csspos).show();
			}, function() {
				// on mouseout
				$('#popover').css({'display':'none'});
				
			});
			
			this.knowhowDrag.draggable({
				helper: function(){
					// Create an invisible div as the helper. It will move and
					// follow the cursor as usual.
					return $('<div></div>').css('opacity',0);
				},
				drag: function(event, ui){
					// During dragging, animate the original object to
					// follow the invisible helper with custom easing.
					var p = ui.helper.position();
					$(this).stop().animate({
						top: p.top,
						left: p.left
					},1000,'easeOutCirc');
				}
			});
			this.knowhowUpgradesDiv.bind('mousewheel DOMMouseScroll', function(e) {

				if( e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) {
					var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
					if (current_scale>0.15){
					var scalenum = current_scale-0.05; 
						var scaletxt = "scale("+scalenum+")";
						self.knowhowUpgradesDiv.css({'transform':scaletxt});
						var cur2 = ((scalenum -1)/100*30)+1;
						var scaletxtb = "scale("+cur2+")";
						self.dragstarDiv.css({'transform':scaletxtb});
						var cur3 = ((scalenum -1)/100*60)+1;
						var scaletxtc = "scale("+cur3+")";
						self.superdragDiv.css({'transform':scaletxtc});
					}	
					
				} else {
					var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
					var scalenum = current_scale+0.05;
					var scaletxt = "scale("+scalenum+")";
					self.knowhowUpgradesDiv.css({'transform':scaletxt});
					var cur2 = ((scalenum -1)/100*30)+1;
					var scaletxtb = "scale("+cur2+")";
					self.dragstarDiv.css({'transform':scaletxtb});
					var cur3 = ((scalenum -1)/100*60)+1;
					var scaletxtc = "scale("+cur3+")";
					self.superdragDiv.css({'transform':scaletxtc});
					
				}
			});
			
			$(document).on('touchmove', function() { 
				$(document).trigger('mousewheel');
			});

			(function($) {
				var count = 0;
				$.fn.nodoubletapzoom = function() {
					$(this).bind('touchstart', function preventZoom(e){
						var t2 = e.timeStamp;
						var t1 = $(this).data('lastTouch') || t2;
						var dt = t2 - t1;
						var fingers = e.originalEvent.touches.length;
						$(this).data('lastTouch', t2);
						if (!dt || dt > 500 || fingers > 1){
							return; // not double-tap
						}
						e.preventDefault(); // double tap - prevent the zoom
						// also synthesize click events we just swallowed up
						$(e.target).trigger('click');
					});
				};
				})(jQuery);
				
			$("body").nodoubletapzoom();	
			
			$('#popover').click(function(){
				$('#popover').hide();
			});
			
			this.openStoreButton.click(function(){
				if (self.slideactive==0){
					if (self.storeopen==0){
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slidee, 10);
						function slidee(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.storeopen = 1;
							} else {
								var pos = 90 - i;
								var posx = "-"+ pos + "%"
								self.storeContainer.css({'left':posx});
							}
						i++;
						}
					}else {
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slidef, 10);
						function slidef(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.storeopen = 0;
							} else {
								var pos = i;
								var posx = "-"+ pos + "%"
								self.storeContainer.css({'left':posx});
							}
						i++;
						}
					}
				}
			});
			
			this.closeStoreButton.click(function(){
				if (self.slideactive==0){
					if (self.storeopen==0){
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slidea, 10);
						function slidea(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.storeopen = 1;
							} else {
								var pos = 90 - i;
								var posx = "-"+ pos + "%"
								self.storeContainer.css({'left':posx});
							}
						i++;
						}
					}else {
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slideb, 10);
						function slideb(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.storeopen = 0;
							} else {
								var pos = i;
								var posx = "-"+ pos + "%"
								self.storeContainer.css({'left':posx});
							}
						i++;
						}
					}
				}
			});
			
							
			this.openStatsButton.click(function(){
				if (self.slideactive==0){
				
					if (self.statsopen==0){
					
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slidec, 10);
						
						function slidec(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.statsopen = 1;
							} else {
							
								var pos = 100 - i;
								var posx = pos + "%"
								
								self.statsContainer.css({'left':posx});
							}
						i++;
						}
					}else {
						
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slided, 10);
						function slided(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.statsopen = 0;
						
							} else {
								var pos = 10+i;
								var posx = pos + "%"
								self.statsContainer.css({'left':posx});
							}
						i++;
						}
					}
				}
			});
			
			this.closeStatsButton.click(function(){
				if (self.slideactive==0){
				
					if (self.statsopen==0){
					
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slidec, 10);
						
						function slidec(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.statsopen = 1;
							} else {
							
								var pos = 100 - i;
								var posx = pos + "%"
								
								self.statsContainer.css({'left':posx});
							}
						i++;
						}
					}else {
						
						self.slideactive=1;
						var i=0;
						self.slidetimer = setInterval(slided, 10);
						function slided(){
							if (i==91){
								clearInterval(self.slidetimer);
								self.slideactive = 0;
								self.statsopen = 0;
						
							} else {
								var pos = 10+i;
								var posx = pos + "%"
								self.statsContainer.css({'left':posx});
							}
						i++;
						}
					}
				}
			});
			
			this.cookieButton.click(function(){
				self.cookieBanner.fadeOut("slow");
			});
			
			this.knowhowStartButton.click(function(){
				self._knowhow();
			});
			
			this.alertNot.click(function(){
				self.alertNot.fadeOut("fast");
			}).children().click(function(e) {
				return false;
			});
			
			this.tabStats.click(function(){
				self._changepage('stats');
			});
			
			this.tabOptions.click(function(){
				self._changepage('options');
			});
			
			this.cloud.click(function(){
				self._cloudclicked();
							
			});
			
			this.sun.click(function(){
				self._sunclicked();
			});
			
			this.saveButton.click(function() {
				self._save(); 
			});
			
			
			this.startButton.click(function() {
				self.intro.fadeOut("fast");
				
			});
			
			this.resetButton.click(function() {
				var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to reset?</br>You will loose all your progress</br>and have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNot.fadeOut(\"fast\");'>No</button></p>";
				Game._makeAlertNot(cont, 0);
				
			});
			
			this.exportButton.click(function(){
				self._export();
			});
			
			this.importButton.click(function(){
				self._import();
			});
			
			this.knowhowButton.click(function() {
				var cont = "<h2 style='margin:0; text-align:center;'>Know-how</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to turn your experience points into know-how?</br>Everything will go faster, but you'll have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._startknowhow();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNot.fadeOut(\"fast\");'>No</button></p>";
				Game._makeAlertNot(cont, 0);
			});
			
			
			this.button.click(function() {
				self._click(); 
			});
			
			this.button.hover(function(){
				//self._animateDrop(1);
				
				if(!self.dropContainer.hasClass("hoverdrop")){
					self.dropContainer.addClass("hoverdrop");
					
				}
			
				
			}, function() {
				// on mouseout
				//self._animateDrop(0);
				self.dropContainer.removeClass("dropover");
				self.dropContainer.removeClass("hoverdrop");
				if(!self.dropContainer.hasClass("outdrop")){
					self.dropContainer.addClass("outdrop");
					window.setTimeout(function(){self.dropContainer.removeClass("outdrop");self.dropContainer.removeClass("dropover");}, 1000);
				}
			});
			
			
			this.buttonOcean.click(function() {
				self._clickOcean(); 
			});
			
			this.endastartoverButton.click(function(){
				var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to start over?</br>You will loose all your progress</br>and have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNot.fadeOut(\"fast\");'>No</button></p>";
				Game._makeAlertNot(cont, 0);
				
			});
			
			this.endahelpButton.click(function(){
				self.max_drops_in_ocean = self.max_drops_in_ocean_b;
				self._knowhow();
			});
			
			this.endbstartoverButton.click(function(){
				var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to start over?</br>You will loose all your progress</br>and have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNot.fadeOut(\"fast\");'>No</button></p>";
				Game._makeAlertNot(cont, 0);
				
			});
			
			this.endbinfinityButton.click(function(){
				self.max_drops_in_ocean = self.max_drops_in_ocean_c;
				self._startknowhow();
			});
						
			
			
			this.handle = window.setInterval(function() {
				
				self.timelagb = Date.now();
				var diff = self.timelagb - self.timelaga;
				
				self._tick(diff);
				self.timelaga = self.timelagb;
			}, this.interval);
			
			this.handleother = window.setInterval(function() {
				self._tickother();
			}, 1000);
			
			

			for (var a=0;a<this.channel_max;a++) {			
				this.audiochannels[a] = new Array();
				this.audiochannels[a]['channel'] = new Audio();		
				this.audiochannels[a]['channel'].volume = 0.5;
				this.volumePerc.text("50%");
				this.volumeSlider.value="50";
				this.audiochannels[a]['finished'] = -1;		
			}
			
			this.volumeSlider.on("change mousemove", function() {
				self.volumePerc.text(self.volumeSlider.val()+"%");
				for (var a=0;a<self.channel_max;a++) {	
					self.audiochannels[a]['channel'].volume = self.volumeSlider.val()/100;
				}
			});
			
			this.spindropOptionButton.click(function(){
				var buttonText = self.spindropOptionButton.text();
				if (buttonText == "Spinning background big drop: yes"){
					self.spindropOptionButton.text("Spinning background big drop: no");
					self.spinningbgoption = 0;
					$('#dropbgimagea').removeClass("rotatel");
					$('#dropbgimageb').removeClass("rotater");
				}else{
					self.spindropOptionButton.text("Spinning background big drop: yes");
					self.spinningbgoption = 1;
					$('#dropbgimagea').addClass("rotatel");
					$('#dropbgimageb').addClass("rotater");
				}
			});
			
						
			this.numberOptionButton.click(function(){
				var buttonText = self.numberOptionButton.text();
				if (buttonText == "Numbers: shortened"){
					self.numberOption = 1;
					self.numberOptionButton.text("Numbers: scientific short");
				} else if (buttonText == "Numbers: scientific short"){
					self.numberOption = 2;
					self.numberOptionButton.text("Numbers: scientific long");
				} else if (buttonText == "Numbers: scientific long"){
					self.numberOption = 0;
					self.numberOptionButton.text("Numbers: shortened");
				}
				
				$.each(self.buildings, function(i, _building) {
					_building.changeButton();
				});
			});
			
			this.cloudSoundOptionButton.click(function(){
				var buttonText = self.cloudSoundOptionButton.text();
				if (buttonText == "Cloud sound: off"){
					self.cloudSoundOption = 1;
					self.cloudSoundOptionButton.text("Cloud sound: on");
				} else if (buttonText == "Cloud sound: on"){
					self.cloudSoundOption = 0;
					self.cloudSoundOptionButton.text("Cloud sound: off");
				}
			});
			
			this.littledropoptionButton.click(function(){
				var buttonText = self.littledropoptionButton.text();
				if (buttonText == "Animate little drops: yes"){
					self.littledropOption = 0;
					self.littledropoptionButton.text("Animate little drops: no");
				} else if (buttonText == "Animate little drops: no"){
					self.littledropOption = 1;
					self.littledropoptionButton.text("Animate little drops: yes");
				}
			});
			
			this.animatetextoptionButton.click(function(){
				var buttonText = self.animatetextoptionButton.text();
				if (buttonText == "Show number of drops: yes"){
					self.animateTextOption = 0;
					self.animatetextoptionButton.text("Show number of drops: no");
				} else if (buttonText == "Show number of drops: no"){
					self.animateTextOption = 1;
					self.animatetextoptionButton.text("Show number of drops: yes");
				}
			});
			
			this.bgdropoptionButton.click(function(){
				var buttonText = self.bgdropoptionButton.text();
				if (buttonText == "Little background drops: yes"){
					self.bgdropsOption = 0;
					self.bgdropoptionButton.text("Little background drops: no");
					self.cps();
				} else if (buttonText == "Little background drops: no"){
					self.bgdropsOption = 1;
					self.bgdropoptionButton.text("Little background drops: yes");
					self.cps();
				}
			});
			
			this.weatherstationImage.click(function(){
				self.weatherstationDiv.toggle("slow");
			});
			
			this.weatherstationDivCloseButton.click(function(){
				self.weatherstationDiv.toggle("slow");
			});
			
			// Minigame poseidon
			this.poseidonImage.click(function(){
				if(self.poseidonStarted==1){
					self.poseidonMinigame.show("slow");
				} else if (self.poseidonStarted==0){
					self.poseidonStart.toggle("slow");
				} else{
					self.poseidonEnd.toggle("slow");
				}
			});
			
			this.poseidonStartCloseButton.click(function(){
				self.poseidonStart.hide("slow");
			});
			
			this.poseidonStartStartButton.click(function(){
				self.poseidonStart.hide();
				self.poseidonMinigame.show("slow");
				self.poseidonStarted = 1;
			});
			
			this.poseidonEndCloseButton.click(function(){
				self.poseidonEnd.hide("slow");
			});
			
			this.poseidonEndStartButton.click(function(){
				self.poseidonEnd.hide();
				self.poseidonMinigame.show("slow");
			});
			
			this.poseidonBacktogameButton.click(function(){
				self.poseidonMinigame.hide("slow");
			});
			
			this.pFoodImage.hover(function(){
				if(!self.pFoodImage.hasClass("hoverdrop")){
					self.pFoodImage.addClass("hoverdrop");
				}
			}, function() {
				self.pFoodImage.removeClass("dropover");
				self.pFoodImage.removeClass("hoverdrop");
				if(!self.pFoodImage.hasClass("outdrop")){
					self.pFoodImage.addClass("outdrop");
					window.setTimeout(function(){self.pFoodImage.removeClass("outdrop"); self.pFoodImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pFoodImage.click(function(){
				self._pFoodClick();
			});
			
			this.templeImage.hover(function(){
				if(!self.templeImage.hasClass("hoverdrop")){
					self.templeImage.addClass("hoverdrop");
				}
			}, function() {
				self.templeImage.removeClass("dropover");
				self.templeImage.removeClass("hoverdrop");
				if(!self.templeImage.hasClass("outdrop")){
					self.templeImage.addClass("outdrop");
					window.setTimeout(function(){self.templeImage.removeClass("outdrop"); self.templeImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.templeImage.click(function(){
				self._templeClick();
			});
			
			this.pFoodBarnImage.hover(function(){
				if(!self.pFoodBarnImage.hasClass("hoverdrop")){
					self.pFoodBarnImage.addClass("hoverdrop");
				}
			}, function() {
				self.pFoodBarnImage.removeClass("dropover");
				self.pFoodBarnImage.removeClass("hoverdrop");
				if(!self.pFoodBarnImage.hasClass("outdrop")){
					self.pFoodBarnImage.addClass("outdrop");
					window.setTimeout(function(){self.pFoodBarnImage.removeClass("outdrop"); self.pFoodBarnImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pFoodBarnImage.click(function(){
				self._pFoodBarnClick();
			});
			
			this.pWoodImage.hover(function(){
				if(!self.pWoodImage.hasClass("hoverdrop")){
					self.pWoodImage.addClass("hoverdrop");
				}
			}, function() {
				self.pWoodImage.removeClass("dropover");
				self.pWoodImage.removeClass("hoverdrop");
				if(!self.pWoodImage.hasClass("outdrop")){
					self.pWoodImage.addClass("outdrop");
					window.setTimeout(function(){self.pWoodImage.removeClass("outdrop"); self.pWoodImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pWoodImage.click(function(){
				self._pWoodClick();
			});
			
			this.pWoodBarnImage.hover(function(){
				if(!self.pWoodBarnImage.hasClass("hoverdrop")){
					self.pWoodBarnImage.addClass("hoverdrop");
				}
			}, function() {
				self.pWoodBarnImage.removeClass("dropover");
				self.pWoodBarnImage.removeClass("hoverdrop");
				if(!self.pWoodBarnImage.hasClass("outdrop")){
					self.pWoodBarnImage.addClass("outdrop");
					window.setTimeout(function(){self.pWoodBarnImage.removeClass("outdrop"); self.pWoodBarnImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pWoodBarnImage.click(function(){
				self._pWoodBarnClick();
			});
			
			
			this.pStoneImage.hover(function(){
				if(!self.pStoneImage.hasClass("hoverdrop")){
					self.pStoneImage.addClass("hoverdrop");
				}
			}, function() {
				self.pStoneImage.removeClass("dropover");
				self.pStoneImage.removeClass("hoverdrop");
				if(!self.pStoneImage.hasClass("outdrop")){
					self.pStoneImage.addClass("outdrop");
					window.setTimeout(function(){self.pStoneImage.removeClass("outdrop"); self.pStoneImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pStoneImage.click(function(){
				self._pStoneClick();
			});
			
			
			this.pStoneBarnImage.hover(function(){
				if(!self.pStoneBarnImage.hasClass("hoverdrop")){
					self.pStoneBarnImage.addClass("hoverdrop");
				}
			}, function() {
				self.pStoneBarnImage.removeClass("dropover");
				self.pStoneBarnImage.removeClass("hoverdrop");
				if(!self.pStoneBarnImage.hasClass("outdrop")){
					self.pStoneBarnImage.addClass("outdrop");
					window.setTimeout(function(){self.pStoneBarnImage.removeClass("outdrop"); self.pStoneBarnImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pStoneBarnImage.click(function(){
				self._pStoneBarnClick();
			});
			
			this.pTentImage.hover(function(){
				if(!self.pTentImage.hasClass("hoverdrop")){
					self.pTentImage.addClass("hoverdrop");
				}
			}, function() {
				self.pTentImage.removeClass("dropover");
				self.pTentImage.removeClass("hoverdrop");
				if(!self.pTentImage.hasClass("outdrop")){
					self.pTentImage.addClass("outdrop");
					window.setTimeout(function(){self.pTentImage.removeClass("outdrop"); self.pTentImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pTentImage.click(function(){
				self._pTentClick();
			});
			
			this.pWoodenhouseImage.hover(function(){
				if(!self.pWoodenhouseImage.hasClass("hoverdrop")){
					self.pWoodenhouseImage.addClass("hoverdrop");
				}
			}, function() {
				self.pWoodenhouseImage.removeClass("dropover");
				self.pWoodenhouseImage.removeClass("hoverdrop");
				if(!self.pWoodenhouseImage.hasClass("outdrop")){
					self.pWoodenhouseImage.addClass("outdrop");
					window.setTimeout(function(){self.pWoodenhouseImage.removeClass("outdrop"); self.pWoodenhouseImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pWoodenhouseImage.click(function(){
				self._pWoodenhouseClick();
			});
			
			this.pStonehouseImage.hover(function(){
				if(!self.pStonehouseImage.hasClass("hoverdrop")){
					self.pStonehouseImage.addClass("hoverdrop");
				}
			}, function() {
				self.pStonehouseImage.removeClass("dropover");
				self.pStonehouseImage.removeClass("hoverdrop");
				if(!self.pStonehouseImage.hasClass("outdrop")){
					self.pStonehouseImage.addClass("outdrop");
					window.setTimeout(function(){self.pStonehouseImage.removeClass("outdrop"); self.pStonehouseImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pStonehouseImage.click(function(){
				self._pStonehouseClick();
			});
			
			this.pWorkerImage.hover(function(){
				if(!self.pWorkerImage.hasClass("hoverdrop")){
					self.pWorkerImage.addClass("hoverdrop");
				}
			}, function() {
				self.pWorkerImage.removeClass("dropover");
				self.pWorkerImage.removeClass("hoverdrop");
				if(!self.pWorkerImage.hasClass("outdrop")){
					self.pWorkerImage.addClass("outdrop");
					window.setTimeout(function(){self.pWorkerImage.removeClass("outdrop"); self.pWorkerImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pWorkerImage.click(function(){
				self._pWorkerClick();
			});
			
			this.pFarmerMinButton.click(function(){
				if(self.pFarmerTotal>=1){
					self.pFarmerTotal--;
					self.pFarmerStat.text(self.pFarmerTotal);
					self.pWorkerIdle++;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
				}
			});
			
			this.pFarmerPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pWorkerIdle--;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
					self.pFarmerTotal++;
					self.pFarmerStat.text(self.pFarmerTotal);
				}
			});
			
			this.pWoodcutterMinButton.click(function(){
				if(self.pWoodcutterTotal>=1){
					self.pWoodcutterTotal--;
					self.pWoodcutterStat.text(self.pWoodcutterTotal);
					self.pWorkerIdle++;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
				}
			});
			
			this.pWoodcutterPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pWorkerIdle--;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
					self.pWoodcutterTotal++;
					self.pWoodcutterStat.text(self.pWoodcutterTotal);
				}
			});
			
			this.pStonecutterMinButton.click(function(){
				if(self.pStonecutterTotal>=1){
					self.pStonecutterTotal--;
					self.pStonecutterStat.text(self.pStonecutterTotal);
					self.pWorkerIdle++;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
				}
			});
			
			this.pStonecutterPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pWorkerIdle--;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
					self.pStonecutterTotal++;
					self.pStonecutterStat.text(self.pStonecutterTotal);
				}
			});
			
			this.pBuilderMinButton.click(function(){
				if(self.pBuildersIdle>=1){
					self.pBuildersIdle--;
					self.pBuildersIdleStat.text(self.pBuildersIdle);
					self.pBuilderStat.text(self.pBuildersIdle+self.pBuildersWorking);
					self.pWorkerIdle++;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
				}
			});
			
			this.pBuilderPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pWorkerIdle--;
					self.pWorkerIdleStat.text(self.pWorkerIdle);
					self.pBuildersIdle++;
					self.pBuildersIdleStat.text(self.pBuildersIdle);
					self.pBuilderStat.text(self.pBuildersIdle+self.pBuildersWorking);
				}
			});
			
			this.pTempleImage.hover(function(){
				if(!self.pTempleImage.hasClass("hoverdrop")){
					self.pTempleImage.addClass("hoverdrop");
				}
			}, function() {
				self.pTempleImage.removeClass("dropover");
				self.pTempleImage.removeClass("hoverdrop");
				if(!self.pTempleImage.hasClass("outdrop")){
					self.pTempleImage.addClass("outdrop");
					window.setTimeout(function(){self.pTempleImage.removeClass("outdrop"); self.pTempleImage.removeClass("dropover");}, 1000);
				}
			});
			
			this.pTempleImage.click(function(){
				self._pTempleClick();
			});
			
			// End minigame poseidon
			this.prayerSelectDiv.draggable();
			this.poseidonSacrifice.draggable();
			this.weatherstationDiv.draggable();
			
			this.prayerSelectDivCloseButton.click(function(){
				self.prayerSelectDiv.hide("slow");
			});
			
			this.poseidonSacrificeCloseButton.click(function(){
				self.poseidonSacrifice.hide("slow");
			});
			
			this.sacrificeDiv.click(function(){
				self._sacrificeClick();
			});
			
			this.upgradeweatherstationDiv.click(function(){
				self._upgradeWeatherstationClick();
			});
			
			this.poseidonSacrifice.on({
							mouseenter: function () {
								self.sacrificeDivHover=1;
								if(self.sacrificeDivActive==1){ 
									self.sacrificeDiv.css({'background-color':'#01a2d7', '-moz-box-shadow':'inset 0 0 20px #55ffff', '-webkit-box-shadow':'inset 0 0 20px #55ffff', 'box-shadow':'inset 0 0 20px #55ffff'});
								}
							},
							mouseleave: function () { 
								self.sacrificeDivHover=0;
								if(self.sacrificeDivActive==1){ 
									self.sacrificeDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
								}
							}
						}, ".hoverSel");
			
			this.weatherstationDiv.on({
							mouseenter: function () {
								self.upgradeWeatherstationDivHover=1;
								if(self.upgradeWeatherstationDivActive==1){ 
									self.upgradeweatherstationDiv.css({'background-color':'#01a2d7', '-moz-box-shadow':'inset 0 0 20px #55ffff', '-webkit-box-shadow':'inset 0 0 20px #55ffff', 'box-shadow':'inset 0 0 20px #55ffff'});
								}
							},
							mouseleave: function () { 
								self.upgradeWeatherstationDivHover=0;
								if(self.upgradeWeatherstationDivActive==1){ 
									self.upgradeweatherstationDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
								}
							}
						}, ".hoverSel");
			
			this.prayerDiv.click(function(){
				self._prayerDivClick();
			});
			
			var sw = window.innerWidth;

			var dif = -((430-sw)/100*75)+"px";
			if (sw<430){
				$(dropbackgrounda).css({'margin-left':dif});
				$(dropbackgroundb).css({'margin-left':dif});
				$(dropbackgroundc).css({'margin-left':dif});
			}
			
			self.handlesave = window.setInterval(function() {
					self._save();
				}, 60000);
				
			var kTestImage = "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==";
			var result = false;
			var img = new Image();
			img.onload = function () {
			
				result = (img.width > 0) && (img.height > 0);
					if (result==true){
						self.hasWebP = 1;
					}else{
						self.hasWebP = 0;
					}
					
					$.each(_prayers, function(i, _prayer) {
						var newPrayer = Prayer(_prayer).init();
						self.prayers.push(newPrayer);
					});
					
					$.each(_buildings, function(i, _building) {
					
						var newBuilding = Building(_building).init();
						self.buildings.push(newBuilding);
						
					});
					
					$.each(_knowhowupgrades, function(i, _knowhowupgrade) {
						var newknowhowUpgrade = KnowhowUpgrade(_knowhowupgrade).init();
						self.knowhowupgrades.push(newknowhowUpgrade);
					});	
					
					$.each(_upgrades, function(i, _upgrade) {
						var newUpgrade = Upgrade(_upgrade).init();
						self.upgrades.push(newUpgrade);
					});
					self.totalUpgrades.text(self.upgrades.length);
					self.upgrades = self.upgrades.sort(function(a, b){return a.id-b.id});
					
					self.upgrades_sorted = self.upgrades.sort(function(a, b){return a.cost-b.cost});
					$.each(self.upgrades_sorted, function(i, _upgrade) {
						self.upgradestore.append(_upgrade.button);
					});
					
					
					$.each(_achievements, function(i, _achievement) {
						var newAchievement = Achievement(_achievement).init();
						self.achievements.push(newAchievement);
					});	
					self.totalAchievements.text(self.achievements.length);
					
					
					
					self._load();
					
			};
			img.onerror = function () {
					
				self.hasWebP = 0;
				
				$.each(_prayers, function(i, _prayer) {
						var newPrayer = Prayer(_prayer).init();
						self.prayers.push(newPrayer);
					});
					
				$.each(_buildings, function(i, _building) {
					var newBuilding = Building(_building).init();
					self.buildings.push(newBuilding);
				});
				
				$.each(_knowhowupgrades, function(i, _knowhowupgrade) {
						var newknowhowUpgrade = KnowhowUpgrade(_knowhowupgrade).init();
						self.knowhowupgrades.push(newknowhowUpgrade);
					});	
				
				$.each(_upgrades, function(i, _upgrade) {
					var newUpgrade = Upgrade(_upgrade).init();
					self.upgrades.push(newUpgrade);
				});
				self.totalUpgrades.text(self.upgrades.length);
					self.upgrades = self.upgrades.sort(function(a, b){return a.id-b.id});
					
				self.upgrades_sorted = self.upgrades.sort(function(a, b){return a.cost-b.cost});
				$.each(self.upgrades_sorted, function(i, _upgrade) {
					self.upgradestore.append(_upgrade.button);
				});
								
				$.each(_achievements, function(i, _achievement) {
					var newAchievement = Achievement(_achievement).init();
					self.achievements.push(newAchievement);
				});
				self.totalAchievements.text(self.achievements.length);
				
				
					
				self._load();
			};
			img.src = "data:image/webp;base64," + kTestImage;			
			
			
			this.buyOneButton.click(function(){
				self.buyBulk = 1;
				self._buyButtonChange();
				$.each(self.buildings, function(i, _building) {
					_building.changeButton();
				});
			});
			
			this.buyTenButton.click(function(){
				self.buyBulk = 10;
				self._buyButtonChange();
				$.each(self.buildings, function(i, _building) {
					_building.changeButton();
				});
			});
			
			this.buyHundredButton.click(function(){
				self.buyBulk = 100;
				self._buyButtonChange();
				$.each(self.buildings, function(i, _building) {
					_building.changeButton();
				});
			});
			
			self._buyButtonChange();
		},
		

		// poseidon Minigame functions
		_pFoodClick: function(){
			var self = this;
			if(self.pFoodTotal<this.pFoodMaxCap){
				self.pFoodTotal++;
				self.pLeatherCounter++;
				if (self.pLeatherCounter==20){
					self.pLeatherTotal++;
					self.pLeatherCounter=0;
				}
				self.pFoodImage.removeClass("dropover");
				
				this.pFoodImage.removeClass("hoverdrop");
				if(!this.pFoodImage.hasClass("clickdrop")){
					this.pFoodImage.addClass("clickdrop");
					window.setTimeout(function(){self.pFoodImage.removeClass("clickdrop"); self.pFoodImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pFoodClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;
				textDiv.css({'display':'block','top':posY, 'left':posX});
				textDiv.addClass("textanimationPoseidon");
				textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						textDiv.remove();
					});
			}
		},
		
		_pFoodBarnClick: function(){
			var self = this;
			if (self.pFoodBarnCost!="Max. cap."){
				if(self.pWoodTotal>=self.pFoodBarnCost){
					self.pWoodTotal = self.pWoodTotal - self.pFoodBarnCost;
					self.pFoodBarnCost = (self.pFoodBarnCost * 1.25).toFixed(0);
					if ((self.pFoodBarnCost>self.pWoodMaxCap)&&(self.pWoodBarnCost>self.pWoodMaxCap)){self.pFoodBarnCost="Max. cap.";}
					self.pFoodMaxCap = self.pFoodMaxCap +100;
					
					self.pFoodBarnCapStat.text(self.pFoodMaxCap);
					self.pFoodBarnCostStat.text(self.pFoodBarnCost);
					
					self.pFoodBarnImage.removeClass("dropover");
					
					this.pFoodBarnImage.removeClass("hoverdrop");
					if(!this.pFoodBarnImage.hasClass("clickdrop")){
						this.pFoodBarnImage.addClass("clickdrop");
						window.setTimeout(function(){self.pFoodBarnImage.removeClass("clickdrop"); self.pFoodBarnImage.addClass("dropover");}, 500);
					}
					var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
					self.poseidonMinigame.append(textDiv);
					textDiv.html('+ 100 cap');
					textDiv.css({'cursor':'pointer'});
					textDiv.click(function(){
						self._pFoodBarnClick();
					});
					var w = textDiv.width();
					var posX = tempX-(w/2);
					var posY = tempY-10;
					textDiv.css({'display':'block','top':posY, 'left':posX});
					textDiv.addClass("textanimationPoseidon");
					textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
							textDiv.remove();
						});
				}
			}
		},
		
		_pWoodClick: function(){
			var self = this;
			if(self.pWoodTotal<this.pWoodMaxCap){
				self.pWoodTotal++;
				
				self.pWoodImage.removeClass("dropover");
				
				this.pWoodImage.removeClass("hoverdrop");
				if(!this.pWoodImage.hasClass("clickdrop")){
					this.pWoodImage.addClass("clickdrop");
					window.setTimeout(function(){self.pWoodImage.removeClass("clickdrop"); self.pWoodImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pWoodClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;
				textDiv.css({'display':'block','top':posY, 'left':posX});
				textDiv.addClass("textanimationPoseidon");
				textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						textDiv.remove();
					});
			}
		},
		
		_pWoodBarnClick: function(){
			var self = this;
			if(self.pWoodBarnCost!="Max. cap."){
				if(self.pWoodTotal>=self.pWoodBarnCost){
					self.pWoodTotal = self.pWoodTotal - self.pWoodBarnCost;
					self.pWoodBarnCost = (self.pWoodBarnCost * 1.25).toFixed(0);
					if (self.pWoodBarnCost>self.pWoodMaxCap){self.pWoodBarnCost="Max. cap.";}
					self.pWoodMaxCap = self.pWoodMaxCap +100;
					
					self.pWoodBarnCapStat.text(self.pWoodMaxCap);
					self.pWoodBarnCostStat.text(self.pWoodBarnCost);
					
					self.pWoodBarnImage.removeClass("dropover");
					
					this.pWoodBarnImage.removeClass("hoverdrop");
					if(!this.pWoodBarnImage.hasClass("clickdrop")){
						this.pWoodBarnImage.addClass("clickdrop");
						window.setTimeout(function(){self.pWoodBarnImage.removeClass("clickdrop"); self.pWoodBarnImage.addClass("dropover");}, 500);
					}
					var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
					self.poseidonMinigame.append(textDiv);
					textDiv.html('+ 100 cap');
					textDiv.css({'cursor':'pointer'});
					textDiv.click(function(){
						self._pWoodBarnClick();
					});
					var w = textDiv.width();
					var posX = tempX-(w/2);
					var posY = tempY-10;
					textDiv.css({'display':'block','top':posY, 'left':posX});
					textDiv.addClass("textanimationPoseidon");
					textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
							textDiv.remove();
						});
				}
			}
		},
		
		_pStoneClick: function(){
			var self = this;
			if(self.pStoneTotal<this.pStoneMaxCap){
				self.pStoneTotal++;
				
				self.pStoneImage.removeClass("dropover");
				
				this.pStoneImage.removeClass("hoverdrop");
				if(!this.pStoneImage.hasClass("clickdrop")){
					this.pStoneImage.addClass("clickdrop");
					window.setTimeout(function(){self.pStoneImage.removeClass("clickdrop"); self.pStoneImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pStoneClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;
				textDiv.css({'display':'block','top':posY, 'left':posX});
				textDiv.addClass("textanimationPoseidon");
				textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						textDiv.remove();
					});
			}
		},
		
		_pStoneBarnClick: function(){
			var self = this;
			if ((self.pStoneBarnCostWood!="Max. cap")&&(self.pStoneBarnCostStone!="Max. cap")){
				if((self.pWoodTotal>=self.pStoneBarnCostWood)&&(self.pStoneTotal>=self.pStoneBarnCostStone)){
					self.pWoodTotal = self.pWoodTotal - self.pStoneBarnCostWood;
					self.pStoneTotal = self.pStoneTotal - self.pStoneBarnCostStone;
					self.pStoneBarnCostWood = (self.pStoneBarnCostWood * 1.25).toFixed(0);
					self.pStoneBarnCostStone = (self.pStoneBarnCostStone * 1.25).toFixed(0);
					
					self.pStoneMaxCap = self.pStoneMaxCap +100;
					
					if(((self.pStoneBarnCostWood>self.pWoodMaxCap)&&(self.pWoodBarnCost>self.pWoodMaxCap))||(self.pStoneBarnCostStone>self.pStoneMaxCap)){self.pStoneBarnCostWood="Max. cap";
					self.pStoneBarnCostStone="Max. cap";}
					
					self.pStoneBarnCapStat.text(self.pStoneMaxCap);
					self.pStoneBarnCostWoodStat.text(self.pStoneBarnCostWood);
					self.pStoneBarnCostStoneStat.text(self.pStoneBarnCostStone);
					
					
					
					self.pStoneBarnImage.removeClass("dropover");
					
					this.pStoneBarnImage.removeClass("hoverdrop");
					if(!this.pStoneBarnImage.hasClass("clickdrop")){
						this.pStoneBarnImage.addClass("clickdrop");
						window.setTimeout(function(){self.pStoneBarnImage.removeClass("clickdrop"); self.pStoneBarnImage.addClass("dropover");}, 500);
					}
					var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
					self.poseidonMinigame.append(textDiv);
					textDiv.html('+ 100 cap');
					textDiv.css({'cursor':'pointer'});
					textDiv.click(function(){
						self._pStoneBarnClick();
					});
					var w = textDiv.width();
					var posX = tempX-(w/2);
					var posY = tempY-10;
					textDiv.css({'display':'block','top':posY, 'left':posX});
					textDiv.addClass("textanimationPoseidon");
					textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
							textDiv.remove();
						});
				}
			}
		},
		
		_pTentClick: function(){
			var self = this;
			if((self.pLeatherTotal>=self.pTentCostLeather)&&(self.pWoodTotal>=self.pTentCostWood)){
				self.pLeatherTotal = self.pLeatherTotal - self.pTentCostLeather;
				self.pWoodTotal = self.pWoodTotal - self.pTentCostWood;
				self.pTentTotal++;
				self.pWorkerMaxCap++;
				
				self.pTentStat.text(self.pTentTotal);
				self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
				
				self.pTentImage.removeClass("dropover");
				
				this.pTentImage.removeClass("hoverdrop");
				if(!this.pTentImage.hasClass("clickdrop")){
					this.pTentImage.addClass("clickdrop");
					window.setTimeout(function(){self.pTentImage.removeClass("clickdrop"); self.pTentImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1 tent');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pTentClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;
				textDiv.css({'display':'block','top':posY, 'left':posX});
				textDiv.addClass("textanimationPoseidon");
				textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						textDiv.remove();
					});
			}
		},
		
		_pWoodenhouseClick: function(){
			var self = this;
			if((self.pLeatherTotal>=self.pWoodenhouseCostLeather)&&(self.pWoodTotal>=self.pWoodenhouseCostWood)&&(self.pBuildersIdle>=self.pWoodenhouseBuildersReq)){
				self.pLeatherTotal = self.pLeatherTotal - self.pWoodenhouseCostLeather;
				self.pWoodTotal = self.pWoodTotal - self.pWoodenhouseCostWood;
				self.pBuildersIdle = self.pBuildersIdle - self.pWoodenhouseBuildersReq;
				self.pBuildersWorking = self.pBuildersWorking + self.pWoodenhouseBuildersReq;
				self.pBuildersIdleStat.text(self.pBuildersIdle);
				self.pBuildersWorkingStat.text(self.pBuildersWorking);
				
				
				self.pWoodenhouseImage.removeClass("dropover");
				
				this.pWoodenhouseImage.removeClass("hoverdrop");
				if(!this.pWoodenhouseImage.hasClass("clickdrop")){
					this.pWoodenhouseImage.addClass("clickdrop");
					window.setTimeout(function(){self.pWoodenhouseImage.removeClass("clickdrop"); self.pWoodenhouseImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1 wooden house');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pWoodenhouseClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;		
				
				var outerDiv = $("<div style='width:70px; height:3px; margin-top:2px;'></div>");
				var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
				self.pWoodenhouseTD.append(outerDiv);
				outerDiv.append(innerDiv);
				
				var buildwoodinterval = setInterval(frame, 10);
				var i = 0;
				function frame() { 
					if (i==1000){
						clearInterval(buildwoodinterval);
						self.pWoodenhouseTotal++;
						self.pWorkerMaxCap+=3;
						self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
						self.pWoodenhouseStat.text(self.pWoodenhouseTotal);
						self.pBuildersIdle = self.pBuildersIdle + self.pWoodenhouseBuildersReq;
						self.pBuildersWorking = self.pBuildersWorking - self.pWoodenhouseBuildersReq;
						self.pBuildersIdleStat.text(self.pBuildersIdle);
						self.pBuildersWorkingStat.text(self.pBuildersWorking);
						innerDiv.remove();
						outerDiv.remove();
						
						
						
						textDiv.css({'display':'block','top':posY, 'left':posX});
						textDiv.addClass("textanimationPoseidon");
						textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
								textDiv.remove();
							});
					} else{
						var wtxt = (i/10)+ "%";
						innerDiv.css({'width':wtxt});
						i++;
					}
				}
			}
		},
		
		_pStonehouseClick: function(){
			var self = this;
			if((self.pLeatherTotal>=self.pStonehouseCostLeather)&&(self.pWoodTotal>=self.pStonehouseCostWood)&&(self.pStoneTotal>=self.pStonehouseCostStone)&&(self.pBuildersIdle>=self.pStonehouseBuildersReq)){
				self.pLeatherTotal = self.pLeatherTotal - self.pStonehouseCostLeather;
				self.pWoodTotal = self.pWoodTotal - self.pStonehouseCostWood;
				self.pStoneTotal = self.pStoneTotal - self.pStonehouseCostStone;
				self.pBuildersIdle = self.pBuildersIdle - self.pStonehouseBuildersReq;
				self.pBuildersWorking = self.pBuildersWorking + self.pStonehouseBuildersReq;
				self.pBuildersIdleStat.text(self.pBuildersIdle);
				self.pBuildersWorkingStat.text(self.pBuildersWorking);
				
				self.pStonehouseImage.removeClass("dropover");
				
				this.pStonehouseImage.removeClass("hoverdrop");
				if(!this.pStonehouseImage.hasClass("clickdrop")){
					this.pStonehouseImage.addClass("clickdrop");
					window.setTimeout(function(){self.pStonehouseImage.removeClass("clickdrop"); self.pStonehouseImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1 stone house');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pStonehouseClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;		
				
				var outerDiv = $("<div style='width:70px; height:3px; margin-top:2px;'></div>");
				var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
				self.pStonehouseTD.append(outerDiv);
				outerDiv.append(innerDiv);
				
				var buildstoneinterval = setInterval(frame, 10);
				var i = 0;
				function frame() { 
					if (i==2000){
						clearInterval(buildstoneinterval);
						self.pStonehouseTotal++;
						self.pWorkerMaxCap+=6;
						self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
						self.pStonehouseStat.text(self.pStonehouseTotal);
						self.pBuildersIdle = self.pBuildersIdle + self.pStonehouseBuildersReq;
						self.pBuildersWorking = self.pBuildersWorking - self.pStonehouseBuildersReq;
						self.pBuildersIdleStat.text(self.pBuildersIdle);
						self.pBuildersWorkingStat.text(self.pBuildersWorking);
						innerDiv.remove();
						outerDiv.remove();
						
						textDiv.css({'display':'block','top':posY, 'left':posX});
						textDiv.addClass("textanimationPoseidon");
						textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
								textDiv.remove();
							});
					} else{
						var wtxt = (i/20)+ "%";
						innerDiv.css({'width':wtxt});
						i++;
					}
				}
			}			
		},
		
		_pWorkerClick: function(){
			var self = this;
			if ((self.pFoodTotal>=self.pWorkerCostFood)&&(self.pWorkerMaxCap>self.pWorkerTotal)){
				self.pFoodTotal = self.pFoodTotal - self.pWorkerCostFood;
				self.pWorkerTotal++;
				self.pWorkerIdle++;
				self.pWorkerStat.text(self.pWorkerTotal);
				self.pWorkerIdleStat.text(self.pWorkerIdle);
				
				self.pWorkerImage.removeClass("dropover");
				
				this.pWorkerImage.removeClass("hoverdrop");
				if(!this.pWorkerImage.hasClass("clickdrop")){
					this.pWorkerImage.addClass("clickdrop");
					window.setTimeout(function(){self.pWorkerImage.removeClass("clickdrop"); self.pWorkerImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1 worker');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pWorkerClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;
				textDiv.css({'display':'block','top':posY, 'left':posX});
				textDiv.addClass("textanimationPoseidon");
				textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						textDiv.remove();
					});
					
				
			}
		},
		
		_pTempleClick: function(){
			var self = this;
			if((self.pWoodTotal>=self.pTempleCostWood)&&(self.pStoneTotal>=self.pTempleCostStone)&&(self.pBuildersIdle>=self.pTempleBuildersReq)){
				self.pWoodTotal = self.pWoodTotal - self.pTempleCostWood;
				self.pStoneTotal = self.pStoneTotal - self.pTempleCostStone;
				self.pBuildersIdle = self.pBuildersIdle - self.pTempleBuildersReq;
				self.pBuildersWorking = self.pBuildersWorking + self.pTempleBuildersReq;
				self.pBuildersIdleStat.text(self.pBuildersIdle);
				self.pBuildersWorkingStat.text(self.pBuildersWorking);
				
				self.pTempleImage.removeClass("dropover");
				
				this.pTempleImage.removeClass("hoverdrop");
				if(!this.pTempleImage.hasClass("clickdrop")){
					this.pTempleImage.addClass("clickdrop");
					window.setTimeout(function(){self.pTempleImage.removeClass("clickdrop"); self.pTempleImage.addClass("dropover");}, 500);
				}
				
				var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
				self.poseidonMinigame.append(textDiv);
				textDiv.html('+ 1 temple');
				textDiv.css({'cursor':'pointer'});
				textDiv.click(function(){
					self._pTempleClick();
				});
				var w = textDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY-10;	
				
				var outerDiv = $("<div style='width:140px; height:3px; margin-top:2px;'></div>");
				var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
				self.pTempleTimeTD.append(outerDiv);
				outerDiv.append(innerDiv);
				
				
				var buildtempleinterval = setInterval(frame, 10);
				var i = 0;
				function frame() { 
					if (i==3000){
						clearInterval(buildtempleinterval);
						self.pTempleTotal++;
						if(self.pTempleTotal>=1000){
							self.poseidonStarted = 2;
							self.pCongratulationsDiv.fadeIn("fast");
							self.templeImage.show("slow");
							self.poseidonImage.removeClass();
						}
						self.pTempleStat.text(self.pTempleTotal);
						self.pBuildersIdle = self.pBuildersIdle + self.pTempleBuildersReq;
						self.pBuildersWorking = self.pBuildersWorking - self.pTempleBuildersReq;
						self.pBuildersIdleStat.text(self.pBuildersIdle);
						self.pBuildersWorkingStat.text(self.pBuildersWorking);
						innerDiv.remove();
						outerDiv.remove();
						
						textDiv.css({'display':'block','top':posY, 'left':posX});
						textDiv.addClass("textanimationPoseidon");
						textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
								textDiv.remove();
							});
					} else{
						var wtxt = (i/30)+ "%";
						innerDiv.css({'width':wtxt});
						i++;
					}
				}
			}
		},
		// end poseidon Minigame functions
		
		_prayerSelected:function(id){
			var cx = this.prayers[id].cx;
			var cy = this.prayers[id].cy;
			var bgpos = cx + "px " + cy + "px";
			if (this.hasWebP==1){
				this.prayerDiv.css({'background-image':'url("images/webp/prayers.webp")', 'background-position':bgpos});
			}else {
				this.prayerDiv.css({'background-image':'url("images/png/prayers.png")', 'background-position':bgpos});
			}
			//to do: make prayer work
			if(Game.prayers[6].selected==1){
					$.each(this.upgrades, function(i, upgrade) {
						upgrade.cost = upgrade.cost - (upgrade.cost/100*5);
						upgrade.discounted = 1;
						upgrade.check();
					});
			} else {
				$.each(this.upgrades, function(i, upgrade) {
					if(upgrade.discounted==1){
						upgrade.cost = upgrade.cost/95*100;
						upgrade.discounted=0;
						upgrade.check();
						
					}
				});
			}
			
			if(Game.prayers[7].selected==1){
					$.each(this.buildings, function(i, upgrade) {
						upgrade.changeButton();
					});
			} else {
					$.each(this.buildings, function(i, upgrade) {
						upgrade.changeButton();
					});
			}
			
			
		},
		
		_prayerDivClick: function(){
			var x = this.poseidonSacrifice.position();
			var sw = x.left;
			var sh = window.innerHeight;
			var posX = sw;
			var posY = sh - tempY +"px";
			this.prayerSelectDiv.css({'bottom':posY, 'right':posX});
			this.prayerSelectDiv.toggle("slow");
		},
		
		_templeClick: function(){
			var self = this;
			self.templeImage.removeClass("dropover");
				
			this.templeImage.removeClass("hoverdrop");
			if(!this.templeImage.hasClass("clickdrop")){
				this.templeImage.addClass("clickdrop");
				window.setTimeout(function(){self.templeImage.removeClass("clickdrop"); self.templeImage.addClass("dropover");}, 500);
			}
			
			this.poseidonSacrifice.toggle("slow");
		},
		
		_upgradeWeatherstationClick: function(){
			var self = this;
			if (self.upgradeWeatherstationDivActive==1){
				if (self.weatherstationLevel==1){
					if (self.drops_in_bank>=1000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 1000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				} else if (self.weatherstationLevel==2){
					if (self.drops_in_bank>=100000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 100000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				}  else if (self.weatherstationLevel==3){
					if (self.drops_in_bank>=1000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 1000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				} else if (self.weatherstationLevel==4){
					if (self.drops_in_bank>=100000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 100000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				} else if (self.weatherstationLevel==5){
					if (self.drops_in_bank>=1000000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 1000000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				}  else if (self.weatherstationLevel==6){
					if (self.drops_in_bank>=100000000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 100000000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				}  else if (self.weatherstationLevel==7){
					if (self.drops_in_bank>=1000000000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 1000000000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				}  else if (self.weatherstationLevel==8){
					if (self.drops_in_bank>=100000000000000000000000){
						self.weatherstationLevel++;
						self._changeWeatherstationText();
						self.drops_in_bank = self.drops_in_bank - 100000000000000000000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.upgradeWeatherstationDivActive=0;
					}
				}
				self._setWeatherstationDeactive();
			}
			
		},
		
		_sacrificeClick: function(){
			var self = this;
			if (self.sacrificeDivActive==1){
				if (self.sacrificeLevel==0){
					if (self.drops_in_bank>=1000000){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.drops_in_bank = self.drops_in_bank - 1000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==1){
					if (self.drops_in_bank>=2000000){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.drops_in_bank = self.drops_in_bank - 2000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==2){
					if (self.drops_in_bank>=4000000){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.drops_in_bank = self.drops_in_bank - 4000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==3){
					if (self.drops_in_bank>=8000000){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.drops_in_bank = self.drops_in_bank - 8000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==4){
					if (self.drops_in_bank>=16000000){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.drops_in_bank = self.drops_in_bank - 16000000; if(self.drops_in_bank<0){self.drops_in_bank=0;}
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==5){
					if(self.buildings[0].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[0].quantity = self.buildings[0].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[0].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==6){
					if(self.buildings[1].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[1].quantity = self.buildings[1].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[1].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==7){
					if(self.buildings[2].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[2].quantity = self.buildings[2].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[2].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==8){
					if(self.buildings[3].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[3].quantity = self.buildings[3].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[3].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==9){
					if(self.buildings[4].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[4].quantity = self.buildings[4].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[4].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==10){
					if(self.buildings[5].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[5].quantity = self.buildings[5].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[5].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==11){
					if(self.buildings[6].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[6].quantity = self.buildings[6].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[6].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==12){
					if(self.buildings[7].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[7].quantity = self.buildings[7].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[7].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==13){
					if(self.buildings[8].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[8].quantity = self.buildings[8].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[8].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==14){
					if(self.buildings[9].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[9].quantity = self.buildings[9].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[9].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==15){
					if(self.buildings[10].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[10].quantity = self.buildings[10].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[10].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==16){
					if(self.buildings[11].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[11].quantity = self.buildings[11].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[11].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==17){
					if(self.buildings[12].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[12].quantity = self.buildings[12].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[12].changeButton();
						self.sacrificeDivActive=0;
					}
				}
				else if (self.sacrificeLevel==18){
					if(self.buildings[13].quantity>=100){
						self.sacrificeLevel++;
						self._changeSacrificeText(self.sacrificeLevel);
						self.buildings[13].quantity = self.buildings[13].quantity - 100;
						self.totalBuildings-=100;
						self.buildings[13].changeButton();
						self.sacrificeDivActive=0;
					}
				}
			}
			this.cps();
		},
		
		_sacrificeSet: function(sl){
			var self = this;
				if (sl==0){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==1){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==2){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==3){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==4){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==5){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==6){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==7){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==8){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==9){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==10){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==11){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==12){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==13){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==14){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==15){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==16){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==17){
					self._changeSacrificeText(self.sacrificeLevel);
				}
				else if (sl==18){
					self._changeSacrificeText(self.sacrificeLevel);
				}
			},
		
		_setWeatherstationActive:function(){
			var self = this; 
			self.upgradeWeatherstationDivActive=1;
			if (self.upgradeWeatherstationDivHover==0){
				self.upgradeweatherstationDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
			}
		},
		
		_setWeatherstationDeactive:function(){
			var self = this; 
			self.upgradeweatherstationDiv.css({'background-color':'#002558', '-moz-box-shadow':'inset 0 0 20px #0090cf', '-webkit-box-shadow':'inset 0 0 20px #0090cf', 'box-shadow':'inset 0 0 20px #0090cf'});
			self.upgradeWeatherstationDivActive=0;
		},
		
		_weatherstationCheck:function(){
			var self = this;
			if (self.upgradeWeatherstationDivActive==0){
				if (self.weatherstationLevel==1){
					if (self.drops_in_bank >= 1000000000000){
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==2){
					if (self.drops_in_bank >= 100000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==3){
					if (self.drops_in_bank >= 1000000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==4){
					if (self.drops_in_bank >= 100000000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==5){
					if (self.drops_in_bank >= 1000000000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==6){
					if (self.drops_in_bank >= 100000000000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==7){
					if (self.drops_in_bank >= 1000000000000000000000){ 
						self._setWeatherstationActive();
					}
				} else if (self.weatherstationLevel==8){
					if (self.drops_in_bank >= 100000000000000000000000){ 
						self._setWeatherstationActive();
					}
				}
			} else {
				if (self.weatherstationLevel==1){
					if (self.drops_in_bank < 1000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==2){
					if (self.drops_in_bank < 100000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==3){
					if (self.drops_in_bank < 1000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==4){
					if (self.drops_in_bank < 100000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==5){
					if (self.drops_in_bank < 1000000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==6){
					if (self.drops_in_bank < 100000000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==7){
					if (self.drops_in_bank < 1000000000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} else if (self.weatherstationLevel==8){
					if (self.drops_in_bank < 100000000000000000000000){ 
						self._setWeatherstationDeactive();
					} 
				} 
			}
		},
		
		_setSacrificeActive:function(){
			var self = this;
			self.sacrificeDivActive=1;
			if (self.sacrificeDivHover==0){
				self.sacrificeDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
			}
		},
		
		_setSacrificeDeactive:function(){
			var self = this;
			self.sacrificeDiv.css({'background-color':'#002558', '-moz-box-shadow':'inset 0 0 20px #0090cf', '-webkit-box-shadow':'inset 0 0 20px #0090cf', 'box-shadow':'inset 0 0 20px #0090cf'});
			self.sacrificeDivActive=0;
		},
		
		_scarificeCheck:function(){
			var self = this;
			if (self.sacrificeDivActive==0){
				if (self.sacrificeLevel==0){
					if (self.drops_in_bank >= 1000000){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==1){
					if (self.drops_in_bank >= 2000000){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==2){
					if (self.drops_in_bank >= 4000000){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==3){
					if (self.drops_in_bank >= 8000000){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==4){
					if (self.drops_in_bank >= 16000000){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==5){
					if (self.buildings[0].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==6){
					if (self.buildings[1].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==7){
					if (self.buildings[2].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==8){
					if (self.buildings[3].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==9){
					if (self.buildings[4].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==10){
					if (self.buildings[5].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==11){
					if (self.buildings[6].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==12){
					if (self.buildings[7].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==13){
					if (self.buildings[8].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==14){
					if (self.buildings[9].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==15){
					if (self.buildings[10].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==16){
					if (self.buildings[11].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==17){
					if (self.buildings[12].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}else if(self.sacrificeLevel==18){
					if (self.buildings[13].quantity >= 100){ 
						self._setSacrificeActive();
					}
				}
			}else {
				if (self.sacrificeLevel==0){
					if (self.drops_in_bank < 1000000){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==1){
					if (self.drops_in_bank < 2000000){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==2){
					if (self.drops_in_bank < 4000000){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==3){
					if (self.drops_in_bank < 8000000){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==4){
					if (self.drops_in_bank < 16000000){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==5){
					if (self.buildings[0].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==6){
					if (self.buildings[1].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==7){
					if (self.buildings[2].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==8){
					if (self.buildings[3].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==9){
					if (self.buildings[4].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==10){
					if (self.buildings[5].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==11){
					if (self.buildings[6].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==12){
					if (self.buildings[7].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==13){
					if (self.buildings[8].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==14){
					if (self.buildings[9].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==15){
					if (self.buildings[10].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==16){
					if (self.buildings[11].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==17){
					if (self.buildings[12].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else if(self.sacrificeLevel==18){
					if (self.buildings[13].quantity < 100){ 
						self._setSacrificeDeactive();
					}
				}else {
					self._setSacrificeDeactive();
				}
			}
		},
		
		_changeWeatherstationText: function(){
			var self = this;
			if (self.weatherstationLevel==0){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 20% of the clouds for you. After you buy this upgrade the weather station will click on 30% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==1){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 20% of the clouds for you. After you buy this upgrade the weather station will click on 30% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==2){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 30% of the clouds for you. After you buy this upgrade the weather station will click on 40% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==3){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 quadrillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 40% of the clouds for you. After you buy this upgrade the weather station will click on 50% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==4){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 quadrillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 50% of the clouds for you. After you buy this upgrade the weather station will click on 60% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==5){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 quintillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 60% of the clouds for you. After you buy this upgrade the weather station will click on 70% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==6){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 quintillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 70% of the clouds for you. After you buy this upgrade the weather station will click on 80% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==7){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 sextillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 80% of the clouds for you. After you buy this upgrade the weather station will click on 90% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==8){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 sextillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 90% of the clouds for you. After you buy this upgrade the weather station will click on 100% of the clouds for you.</p>');
			} else if (self.weatherstationLevel==9){
				self.upgradeweatherstationDiv.html('<p class="sacrificetext">Fully upgraded</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 100% of the clouds for you.</p>');
			} 
		},
		
		_changeSacrificeText: function(level){
			var self = this;
			if (self.sacrificeLevel==0){
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />1 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon will get a little less grumpy.</p>');
			} else if (self.sacrificeLevel==1) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />2 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon will get a little bit more favorable.</p>');
			} else if (self.sacrificeLevel==2) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />4 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon is getting happy with us.</p>');
			}else if (self.sacrificeLevel==3) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />8 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">One more and Poseidon will consider helping us.</p>');
			}else if (self.sacrificeLevel==4) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />16 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Brainpower prayer<br />Crazy scientists are 10% more powerful</p>');
			}else if (self.sacrificeLevel==5) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Helping hands</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Clickpower prayer<br />50% more clicking power</p>');
			}else if (self.sacrificeLevel==6) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Pipettes</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Pipettelicious<br />Each pipette is 2% more powerful for every helper you have</p>');
			}else if (self.sacrificeLevel==7) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Air dryers</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Turbo prayer<br />Chance of drops per second x30 for 60 seconds when you click on a cloud.</p>');
			}else if (self.sacrificeLevel==8) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Buckets</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Brainwaves prayer<br />Crazy scientists are 20% more powerful.</p>');
			}else if (self.sacrificeLevel==9) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Raindances</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Discount upgrade prayer<br />All upgrades are 5% cheaper.</p>');
			}else if (self.sacrificeLevel==10) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Faucets</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Discount helper prayer<br />All helpers are 5% cheaper.</p>');
			}else if (self.sacrificeLevel==11) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Garden hoses</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Bonus prayer<br />10% bonus drops per second.</p>');
			}else if (self.sacrificeLevel==12) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Trucks</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Bad weather prayer<br />Clouds show up 10% more often.</p>');
			}else if (self.sacrificeLevel==13) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Fire hoses</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Poseidon Wrath prayer<br />Chance of clicking power times 1111 for 11 seconds when you click on a cloud.</p>');
			}else if (self.sacrificeLevel==14) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Ice mines</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Heavy rain prayer<br />Clouds give 20% more drops</p>');
			}else if (self.sacrificeLevel==15) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Space ships</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Big bonus prayer<br />20% bonus drops per second.</p>');
			}else if (self.sacrificeLevel==16) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Worm holes</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Braingrowth prayer<br />Crazy scientists are 40% more powerful</p>');
			}else if (self.sacrificeLevel==17) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Rivers</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Enormous bonus prayer<br />40% bonus drops per second.</p>');
			}else if (self.sacrificeLevel==18) {
				self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Colliders</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Double prayer<br />Double your drops per second.</p>');
			}else if (self.sacrificeLevel==19) {
				self.sacrificeDiv.html('<p class="sacrificetext">You have sacrificed enough!</p>');
			}
		},
		
		_getPopPos: function(type){
			var result = [];
			var w = window.innerWidth; 
			
			
			if(type=='left'){
				if (w<1200){
					result = ['1%', 'auto']; 
				}else {
					result = ['auto','25%']; 
				}
			} 
			
			return result;
		},
		
		_playSound: function(s){
			for (var a=0;a<this.audiochannels.length;a++) {
				var thistime = new Date();
				if (this.audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
					this.audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
					this.audiochannels[a]['channel'].src = document.getElementById(s).src;
					this.audiochannels[a]['channel'].load();
					this.audiochannels[a]['channel'].play();
					break;
				}
			}
		},
		
		_buyButtonChange: function(){
			var self = this;
			if (this.buyBulk == 1){
				self.buyOneButton.css({'color':'#ffffff'});
				self.buyOneButton.hover(function(){
					self.buyOneButton.css({'color':'#ffffff'});
				}, function(){self.buyOneButton.css({'color':'#ffffff'})});
				
				self.buyTenButton.css({'color':'#bbbbbb'});
				self.buyTenButton.hover(function(){
					self.buyTenButton.css({'color':'#ffffff'});
				}, function(){self.buyTenButton.css({'color':'#bbbbbb'})});
				self.buyHundredButton.css({'color':'#bbbbbb'});
				self.buyHundredButton.hover(function(){
					self.buyHundredButton.css({'color':'#ffffff'});
				}, function(){self.buyHundredButton.css({'color':'#bbbbbb'})});
				
			}else if (this.buyBulk == 10){
				self.buyOneButton.css({'color':'#bbbbbb'});
				self.buyOneButton.hover(function(){
					self.buyOneButton.css({'color':'#ffffff'});
				}, function(){self.buyOneButton.css({'color':'#bbbbbb'})});
				
				self.buyTenButton.css({'color':'#ffffff'});
				self.buyTenButton.hover(function(){
					self.buyTenButton.css({'color':'#ffffff'});
				}, function(){self.buyTenButton.css({'color':'#ffffff'})});
				
				self.buyHundredButton.css({'color':'#bbbbbb'});
				self.buyHundredButton.hover(function(){
					self.buyHundredButton.css({'color':'#ffffff'});
				}, function(){self.buyHundredButton.css({'color':'#bbbbbb'})});
				
			}else if (this.buyBulk == 100){
				self.buyOneButton.css({'color':'#bbbbbb'});
				self.buyOneButton.hover(function(){
					self.buyOneButton.css({'color':'#ffffff'});
				}, function(){self.buyOneButton.css({'color':'#bbbbbb'})});
				
				self.buyTenButton.css({'color':'#bbbbbb'});
				self.buyTenButton.hover(function(){
					self.buyTenButton.css({'color':'#ffffff'});
				}, function(){self.buyTenButton.css({'color':'#bbbbbb'})});
				
				self.buyHundredButton.css({'color':'#ffffff'});
				self.buyHundredButton.hover(function(){
					self.buyHundredButton.css({'color':'#ffffff'});
				}, function(){self.buyHundredButton.css({'color':'#ffffff'})});
			}
		},
		
		_setMtnEewLvl: function(lvl){
			var alvl = lvl + "%";
			var clvl = (100 - lvl) + "%";
			this.mtnEewLevel.css({'height':alvl, 'top':clvl});
		},
		
		_export: function(){
			var savetxt = this._getsavetxt();
			savetxt = btoa(savetxt);
			var cont = "<h2 style='margin:0; text-align:center;'>Export save</h2><p style='margin:0; padding:0; text-align:center;' >This is your save.</br>Copy it and save it.</br>You can import this text to retrieve this save</br></br><form><textarea rows='10' cols='50' onclick='this.select();'>"+savetxt+"</textarea></form><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game.alertNot.fadeOut(\"fast\");'>Done</button></p>";
			this._makeAlertNot(cont);
			
		},
		
		_import: function(){
			var cont = "<h2 style='margin:0; text-align:center;'>Import save</h2><p style='margin:0; padding:0; text-align:center;' >Paste your save below and click import</br></br><form><textarea rows='10' cols='50' id='importtxt'></textarea></form><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._importload();'>Import</button></p>";
			this._makeAlertNot(cont);
		},
		
		_importload:function(){
			document.getElementById("importtxt").focus();
			var loadtxt = document.getElementById("importtxt").value;
			
			if (loadtxt){
				if(typeof(Storage) !== "undefined") {
					window.localStorage.FtOSave = loadtxt;
				} 
				this.alertNot.fadeOut("fast");
				this.reload=1;
				location.reload();
			} else {
				this.alertNot.fadeOut("fast");
			}
		},
		
		_checkKnowhowScreen: function(){
			this.knowhowscreenExpStats.text(Beautify(this.oldExperiencePoints));
			$.each(this.knowhowupgrades, function(i, upgrade) {
				upgrade.check();
			});
		},
		
		_startknowhow: function(){
			var self = this;
			clearInterval(this.handle);
			clearInterval(this.handlesave);
			this.oldExperiencePoints += this.experience;
			this.knowhow = this.knowhow + this.experience;
			this.knowhowscreenExpStats.text(Beautify(this.oldExperiencePoints));
			this.knowhowscreenKnowhowStats.text(Beautify(this.knowhow));
			
			$.each(this.knowhowupgrades, function(i, upgrade) {
				upgrade.check();
			});
			
			this.knowhowScreen.fadeIn("fast");
			this.alertNot.fadeOut("fast");
			this.knowhowtimer = window.setInterval(function() {
				var posx = self.knowhowDrag.position().left;
				var posy = self.knowhowDrag.position().top;
				if((self.dragstarposx!=posx)||(self.dragstarposy!=posy)){
					var scrw = $(window).width();
					var scrh = $(window).height();
					self.dragstarDiv.css({'left':posx/3-scrw,'top':posy/3-scrh});
					self.superdragDiv.css({'left':posx/1.5-scrw,'top':posy/1.5-scrh});
					self.dragstarposx = posx;
					self.dragstarposy = posy;
				}
			}, this.interval);
						
		},
		
		_knowhow: function(){
			var self = this;
			
			$.each(this.buildings, function(i, building) {
				building.shown = 0;
				building.quantity = 0;
				building.cost = building.startcost;
				building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>???</span>");
				if (self.hasWebP==1){
					building.button.css({'background':'#C5CAE9 url("images/webp/question.webp") no-repeat right center'});
				}else {
					building.button.css({'background':'#C5CAE9 url("images/png/question.png") no-repeat right center'});
				}
				
				
				if(building.id>3){
					building.button.hide();
				}
			});
	
			$.each(this.upgrades, function(i, upgrade) {
				if(upgrade.name!="poseidon"){
					upgrade.bought = 0;
					upgrade.button.hide();
					upgrade.buttonBought.hide();
				}
			});
			this.cps();
			
			var rundowdrops = this.drops_in_bank;
			this.drops_in_bank = 0;
			this.drops_in_ocean = 0;
			this.experience = 0;
			this.handmade_drops = 0;
			this.total_drops_produced = 0;
			this.click_num_perc = 0;
			this.click_num = 1;
			this.experiencePerc=0;
			this.run_start = 0;
			this.handmade_clicks = 0;
			this.aliensList = [];
			//poseidon reset
			this.sacrificeLevel = 0;
			
			
			$.each(this.prayers, function(i, prayer) {
						prayer.selected = 0;
					});
			this._prayerSelected(0);
/*			this.poseidonStarted= 0;
			this.pFoodTotal = 0;
			this.pFoodMaxCap = 200;
			this.pLeatherTotal = 0;
			this.pLeatherCounter = 0;
			this.pWoodTotal = 0;
			this.pWoodMaxCap = 200;
			this.pFoodBarnCost = 100;
			this.pWoodBarnCost = 100;
			this.pStoneTotal = 0;
			this.pStoneMaxCap = 200;
			this.pStoneBarnCostWood = 20;
			this.pStoneBarnCostStone = 100;
			this.pTentTotal = 0;
			this.pTentCostLeather = 2;
			this.pTentCostWood = 2;
			this.pWoodenhouseTotal = 0;
			this.pWoodenhouseCostLeather = 1;
			this.pWoodenhouseCostWood = 20;
			this.pWoodenhouseBuildersReq = 2;
			this.pStonehouseTotal = 0;
			this.pStonehouseCostLeather = 1;
			this.pStonehouseCostWood = 10;
			this.pStonehouseCostStone = 30;
			this.pStonehouseBuildersReq = 5;
			this.pBuildersIdle = 0;
			this.pBuildersWorking = 0;
			this.pWorkerTotal = 0;
			this.pWorkerCostFood = 20;
			this.pWorkerIdle = 0;
			this.pFarmerTotal = 0;
			this.pWoodcutterTotal = 0;
			this.pStonecutterTotal = 0;
			this.pFarmerProduce = 1.2;
			this.pWoodcutterProduce = 0.5;
			this.pStonecutterProduce = 0.2;
			this.pWorkerDie = 0;
			this.pFoodShortage = 0;
			this.pTempleTotal = 0;
			this.pTempleCostWood = 50;
			this.pTempleCostStone = 100;
			this.pTempleBuildersReq = 20;
			this.pWorkerMaxCap = 0;
		*/
		
			this._save();
			
			
			this.cps();
			this.reload = 1;
			location.reload(false);
			
		},
		
		
		_makeAlertNot:function(text){
			this.alertNotTxt.html(text);
			this.alertNot.fadeIn("fast");
		},
		
		
		_reset:function(){
			this.alertNot.fadeOut("fast");
			if(typeof(Storage) !== "undefined") {
				localStorage.removeItem("FtOSave");
				this.reload=1;
				location.reload(false);
			} else {
				// Sorry! No Web Storage support..
			}
		},
		
		_makeNotice: function(imagename, title, text, x, y, time){
			var notice = '';
			if (imagename!=0){
				if(Game.hasWebP==1){
					var filen = "url(images/webp/" + imagename + ".webp)";
					var pos = x +"px "+ y + "px";
					notice = $('<div class="notice" ><table><tr><td><div class="noticeimage" style="border:2px solid white; border-radius:4px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+title+'</p><p>'+text+'</p></td></tr></table></div>');
				}else{
					var filen = "url(images/png/" + imagename + ".png)";
					var pos = x +"px "+ y + "px";
					notice = $('<div class="notice" ><table><tr><td><div class="noticeimage" style="border:2px solid white; border-radius:4px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+title+'</p><p>'+text+'</p></td></tr></table></div>');
				}
			} else {
				notice = $('<div class="notice" ><p style="text-align:center; margin:0; padding:0;">'+title+'</p></div>');
			}
			this.notices.append(notice);
			notice.click(function(){
				this.remove();
			});
			var dur = 10000;
			if (time!=0){
				dur=time;
			}
			window.setTimeout(function(){notice.remove();}, dur);
		},
		
		_changepage:function(pagename){
			$('#pagestats').fadeOut("fast");
			$('#pageoptions').fadeOut("fast");
			if(pagename=='stats'){
				$('#pagestats').fadeIn("fast");
			}else{
				$('#pageoptions').fadeIn("fast");
			}
		},
		
		_cloudclicked:function(){
			this.cloudjclicked =1;
			var self = this;
			$('#popover').css({'display':'none'});
			this.cloudsclicked = this.cloudsclicked + 1;

			this.cloudvisible = 0;
			this.cloud.css({'display':'none'});
			var max = this.cloudend-this.cloudstart;
			var randomnum = Math.floor((Math.random() * max) + 1);
			var nextcl = randomnum + this.cloudstart;
			if(Game.prayers[9].selected==1){
				nextcl = nextcl * 0.90;
			}
			window.setTimeout(function(){self.cloudjclicked =0;self._showcloud();}, nextcl);

			var randOutcome = Math.floor((Math.random() * 100) + 1);
			
			if ((randOutcome>=1)&&(randOutcome<=96)){
				if ((randOutcome>=1)&&(randOutcome<=45)){
					this._cloudGivesDrops();
				}else if ((randOutcome>=46)&&(randOutcome<=90)){
					this._cloudGivesStorm();
				}else if ((randOutcome>=90)&&(randOutcome<=96)){
					if (Game.prayers[4].selected==1){
						this._cloudGivesTurbo();
					}else if (Game.prayers[10].selected==1){
						this._cloudGivesWrath();
					}else {
						if((randOutcome>=90)&&(randOutcome<=93)){
							this._cloudGivesDrops();
						}else {
							this._cloudGivesStorm();
						}
					}
				}
			} else {
				this._cloudGivesClickStorm();
			}
		},
		
		_cloudGivesClickStorm: function(){
			var self = this;
			if (this.clickStorm==0){
					this.clickStorm=1;
					
					this._stopClickStorm();
					this._makeNotice("clickstorm", "Click storm!","Clicking times 777 for "+ this.clickStormduration/1000+" seconds!",0,0,0);
				}else{
					this.clickStorm=2;
					window.setTimeout(function(){self.clickStorm=1; self.click_num = self.click_num * 777; self._stopClickStorm(); self._makeNotice("clickstorm", "Click storm!","Clicking times 777 for "+self.clickStormduration/1000+" seconds!");}, 100,0,0,0);
				}
		},
		
		_cloudGivesTurbo:function(){
			var self = this;
			if (this.turbo==0){
				this.turbo=1;
				this.cps();
				this._stopturbo();
				this._makeNotice("turbo", "Turbo!","Drops per second times 30 for "+ this.turboduration/1000 +" seconds",0,0,0);
			}else{
				this.turbo=2;
				window.setTimeout(function(){self.turbo=1; self.cps(); self._stopturbo(); self._makeNotice("turbo", "Turbo!","Drops per second times 30 for "+ self.turboduration/1000 +" seconds");}, 100,0,0,0);
			}
		},
		
		_cloudGivesWrath:function(){
			var self = this;
			if (this.wrath==0){
				this.wrath=1;
				this._stopWrath();
				this._makeNotice("wrath", "Wrath!","Clicking times 1111 for "+ this.wrathduration/1000+" seconds!",0,0,0);
			}else{
				this.wrath=2;
				window.setTimeout(function(){self.wrath=1; self.click_num = self.click_num * 1111; self._stopWrath(); self._makeNotice("wrath", "Wrath!","Clicking times 1111 for "+self.wrathduration/1000+" seconds!");}, 100,0,0,0);
			}
		},
		
		_cloudGivesStorm: function(){
			var self = this;
			if (this.storm==0){
				this.storm=1;
				this.cps();
				this._stopstorm();
				this._makeNotice("storm", "Storm!","Drops per second times 7 for "+ this.stormduration/1000 +" seconds",0,0,0);
			}else{
				this.storm=2;
				window.setTimeout(function(){self.storm=1; self.cps(); self._stopstorm(); self._makeNotice("storm", "Storm!","Drops per second times 7 for "+ self.stormduration/1000 +" seconds");}, 100,0,0,0);
			}
		},
		
		_cloudGivesDrops: function(){
			var dib = Math.round(this.drops_in_bank*15/100);
			var dps = this.cps_cur * 900;
		//	console.log(Beautify(dib) +" / " + Beautify(dps));
			if (dib<dps){
				if (Game.prayers[11].selected==1){
					dib = Math.round(dib * 1.2);
					
				}
				if(dib>0){
					this.total_drops_produced += dib;
					this.total_ever += dib; 
					this.drops_in_bank += dib; if(this.drops_in_bank<0){this.drops_in_bank=0;}
					var txt = "You got lucky with rain and got "+ Beautify(dib) + " extra drops!";  
					this._makeNotice("rain", "Rain!",txt,0,0,0);
				}
			}else{
				if (Game.prayers[11].selected==1){
					dps = Math.round(dps * 1.2);
					
				}
				if (dps>0){
					this.total_drops_produced += dps;
					this.total_ever += dps; 
					this.drops_in_bank += dps; if(this.drops_in_bank<0){this.drops_in_bank=0;}
					var txt = "You got lucky with rain and got "+ Beautify(dps) + " extra drops!";  
					this._makeNotice("rain", "Rain!",txt,0,0,0);
				}
			}
		},
		
		_stopClickStorm:function(){
		
			var self = this;
			var i = 0;
			var interv = setInterval(frame, 10);
			self.clickStormTimer.css({'display':'none', 'width':'100%'});
			function frame() { 
				if (i>=(self.clickStormduration/10)){
					clearInterval(interv);
					self.clickStorm=0;
					//self.click_num = self.click_num / 777;
					self.clickStormTimer.css({'display':'none', 'width':'100%'});
				} else{
					var w = 100-(100/(self.clickStormduration/10)*i) + '%';
					self.clickStormTimer.css({'display':'block', 'width':w});
					i++;
				}
				if (self.clickStorm==2){
					clearInterval(interv);
					self.clickStorm=0;
					self.click_num = self.click_num / 777;
					self.clickStormTimer.css({'display':'none', 'width':'100%'});
				}
			}
		},
		
		_stopWrath:function(){
			var self = this;
			var i = 0;
			var interv = setInterval(frame, 10);
			self.wrathTimer.css({'display':'none', 'width':'100%'});
			function frame() { 
				if (i>=(self.wrathduration/10)){
					clearInterval(interv);
					self.wrath=0;
				//	self.click_num = self.click_num / 1111;
					self.wrathTimer.css({'display':'none', 'width':'100%'});
				} else{
					var w = 100-(100/(self.wrathduration/10)*i) + '%';
					self.wrathTimer.css({'display':'block', 'width':w});
					i++;
				}
				if (self.wrath==2){
					clearInterval(interv);
					self.wrath=0;
					self.click_num = self.click_num / 1111;
					self.wrathTimer.css({'display':'none', 'width':'100%'});
				}
			}
		},
		
		_stopstorm:function(){
			var self = this;
			var i = 0;
			var interv = setInterval(frame, 10);
			
			function frame() { 
				if (i>=(self.stormduration/10)){
					clearInterval(interv);
					self.storm=0;
					self.cps();
					self.stormTimer.css({'display':'none', 'width':'100%'});
				} else{
					var w = 100-(100/(self.stormduration/10)*i) + '%';
					self.stormTimer.css({'display':'block', 'width':w});
					i++;
				}
				if (self.storm==2){
					clearInterval(interv);
					self.storm=0;
					self.cps();
					self.stormTimer.css({'display':'none', 'width':'100%'});
				}
			}
			
			
		},
		
		
		_stopturbo:function(){
			var self = this;
			var i = 0;
			var interv = setInterval(frame, 10);
			
			function frame() { 
				if (i>=(self.turboduration/10)){
					clearInterval(interv);
					self.turbo=0;
					self.cps();
					self.turboTimer.css({'display':'none', 'width':'100%'});
				} else{
					var w = 100-(100/(self.turboduration/10)*i) + '%';
					self.turboTimer.css({'display':'block', 'width':w});
					i++;
				}
				if (self.turbo==2){
					clearInterval(interv);
					self.turbo=0;
					self.cps();
					self.turboTimer.css({'display':'none', 'width':'100%'});
				}
			}
		},
		
		
		_showcloud:function(){
			
			var self = this;
			this.cloudvisible = 1;
			if (this.cloudSoundOption == 1){
				this._playSound("cloudping");
			}
			var i = 0;
			var interv = setInterval(frame, 20);
			var dw = $( document ).width();
			var dh = $( document ).height();
			var randomw = Math.floor((Math.random() * (dw-200))) + "px";
			var randomh = Math.floor((Math.random() * (dh-200))) + "px";
			self.cloud.css({'display':'block','-moz-opacity': '0', 'opacity':'0', 'filter': 'alpha(opacity=0)'});
			
			function frame() { 
			
				if (self.cloudvisible == 1){
					
					if ((i==100)||(self.cloudjclicked==1)){
							clearInterval(interv);
							if (self.cloudjclicked==0){
								window.setTimeout(function(){self._hidecloud();}, self.cloudduration);
								if(self.weatherstationLevel>0){
									window.setTimeout(function(){self._autoclickcloud();}, 2000);
								}
							}else {
								self.cloud.css({'display':'none'});
								self.cloudjclicked=0;
								self.cloudvisible = 0;
							}
							
					}else{
						self.cloud.css({'-moz-opacity': i/100, 'opacity':i/100, 'filter': 'alpha(opacity='+i+')', 'left':randomw, 'top':randomh});
						i++;
					}
					
				}else {
					clearInterval(interv);
					self.cloud.css({'display':'none'});
				}
			}
			
			
			
		},
		
		_autoclickcloud: function(){
			if(this.weatherstationLevel==1){
				var autoclick = randomIntFromInterval(1,5);
				if(autoclick==1){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==2){
				var autoclick = randomIntFromInterval(1,3);
				if(autoclick==1){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==3){
				var autoclick = randomIntFromInterval(1,10);
				if(autoclick<5){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==4){
			var autoclick = randomIntFromInterval(1,10);
				if(autoclick<6){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==5){
			var autoclick = randomIntFromInterval(1,10);
				if(autoclick<7){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==6){
				var autoclick = randomIntFromInterval(1,10);
				if(autoclick<8){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==7){
			var autoclick = randomIntFromInterval(1,10);
				if(autoclick<9){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==8){
			var autoclick = randomIntFromInterval(1,10);
				if(autoclick<10){
					self.cloud.click();
				}
			}else if(this.weatherstationLevel==9){
					self.cloud.click();
			}
		},
		
		_hidecloud: function(){
			
			if (this.cloudvisible==1){
				var self = this
			
				var i = 0;
				var interv = setInterval(frame, 20);
				
				function frame() { 
					if ((i==100)||(this.cloudjclicked==1)){
							clearInterval(interv);
							self.cloud.css({'display':'none'});
							self.cloudjclicked = 0;
							self.cloud.css({'display':'none'});
							if (self.cloudvisible==1){
								self.cloudvisible=0;
								self.cloud.css({'display':'none'});
								var max = self.cloudend-self.cloudstart;
								var randomnum = Math.floor((Math.random() * max) + 1);
								var nextcl = randomnum + self.cloudstart;
								if(Game.prayers[9].selected==1){
									nextcl = nextcl * 0.90;
								}
								window.setTimeout(function(){self._showcloud();}, nextcl);
							}
					}else{
						self.cloud.css({'-moz-opacity': (100-i)/100, 'opacity':(100-i)/100, 'filter': 'alpha(opacity='+(100-i)+')'});//'display':'block', 
					}
					i++;
				}
				
			}
			
		},
		
		

		_animateText: function(num){
			var self = this;
			var textDiv = $("<div class='textclick'>&nbsp;</div>");
			$("body").append(textDiv);
			textDiv.html('+ ' + Beautify(num.toFixed(0)) );
			textDiv.css({'cursor':'pointer'});
			textDiv.click(function(){
				self._click();
			});
			var w = textDiv.width();
			var posX = tempX-(w/2);
			var posY = tempY+20;
			textDiv.css({'display':'block','top':posY, 'left':posX});
			textDiv.addClass("textanimation");
			textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
					textDiv.remove();
				});
			
		},
		
		_getsavetxt: function(){
			var savetxt = this.version +"|";
			savetxt += this.drops_in_bank + "|";
			savetxt += this.total_drops_produced + "|";
			savetxt += this.total_ever + "|";
			savetxt += this.drops_in_ocean + "|";
			savetxt += this.handmade_clicks + "|";
			savetxt += this.handmade_drops + "|";
			savetxt += this.cloudsclicked + "|";
			savetxt += this.knowhow + "|";
			savetxt += this.max_drops_in_ocean + "|";
			savetxt += this.oldExperiencePoints + "|";
			$.each(this.buildings, function(i, building) {
				savetxt += building.shown;
			});
			savetxt = savetxt + "|";
			$.each(this.buildings, function(i, building) {
				savetxt += building.quantity + "|";
			});
			var alienc = 0;
			var alient = 0;
			this.upgrades_savesort = this.upgrades.sort(function(a, b){return a.id-b.id});
			$.each(this.upgrades_savesort, function(i, upgrade) {
				savetxt += upgrade.bought;
				if ((upgrade.sort=="contact")||(upgrade.sort=="contactb")||(upgrade.sort=="aliens")){
					if (upgrade.bought==1){
						alienc++;
					}
				}
				if (upgrade.sort=="alientech"){
					if (upgrade.bought==1){
						alient++;
					}
				}
			});
			savetxt = savetxt + "|";
			$.each(this.achievements, function(i, achievement) {
				savetxt += achievement.unlocked;
			});
			savetxt = savetxt + "|";
			if (this.aliensList.length>0){
				$.each(this.aliensList, function(i, alien) {
					
					if (alien.active){
						savetxt += "1::" + alien.dropsDrained.toFixed(0) + "-";
					}else {
						savetxt += "0-";
					}
				});
			} else {
				savetxt += "0";
			}
			savetxt = savetxt + "|";
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				savetxt += kupgrade.bought;
			});
			savetxt = savetxt + "|";
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				savetxt += kupgrade.shown;
			});
			savetxt = savetxt + "|";
			savetxt += this.first_start + "|";
			savetxt += this.run_start; 
			savetxt = savetxt + "|";
			savetxt += alienc;
			savetxt = savetxt + "|";
			savetxt += alient;
			savetxt = savetxt + "|";
			savetxt += this.numberOption;
			savetxt = savetxt + "|";
			savetxt += this.cloudSoundOption;
			savetxt = savetxt + "|";
			savetxt += this.volumePerc.text();
			savetxt = savetxt + "|";
			savetxt += this.littledropOption;
			savetxt = savetxt + "|";
			savetxt += this.animateTextOption;
			savetxt = savetxt + "|";
			savetxt += this.bgdropsOption;
			savetxt = savetxt + "|";
			savetxt += this.poseidonStarted;
			savetxt = savetxt + "|";
			savetxt += this.pFoodTotal;
			savetxt = savetxt + "|";
			savetxt += this.pLeatherTotal;
			savetxt = savetxt + "|";
			savetxt += this.pFoodMaxCap;
			savetxt = savetxt + "|";
			savetxt += this.pFoodBarnCost;
			savetxt = savetxt + "|";
			savetxt += this.pWoodTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWoodMaxCap;
			savetxt = savetxt + "|";
			savetxt += this.pWoodBarnCost;
			savetxt = savetxt + "|";
			savetxt += this.pStoneTotal;
			savetxt = savetxt + "|";
			savetxt += this.pStoneMaxCap;
			savetxt = savetxt + "|";
			savetxt += this.pStoneBarnCostWood;
			savetxt = savetxt + "|";
			savetxt += this.pStoneBarnCostStone;
			savetxt = savetxt + "|";
			savetxt += this.pTentTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWoodenhouseTotal;
			savetxt = savetxt + "|";
			savetxt += this.pStonehouseTotal;
			savetxt = savetxt + "|";
			savetxt += this.pBuildersIdle+this.pBuildersWorking;
			savetxt = savetxt + "|";
			savetxt += this.pWorkerTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWorkerIdle;
			savetxt = savetxt + "|";
			savetxt += this.pFarmerTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWoodcutterTotal;
			savetxt = savetxt + "|";
			savetxt += this.pStonecutterTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWorkerDie;
			savetxt = savetxt + "|";
			savetxt += this.pTempleTotal;
			savetxt = savetxt + "|";
			savetxt += this.pWorkerMaxCap;
			savetxt = savetxt + "|";
			$.each(this.prayers, function(i, prayer) {
				savetxt += prayer.selected;
			});
			savetxt = savetxt + "|";
			savetxt += this.sacrificeLevel;
			savetxt = savetxt + "|";
			savetxt += Date.now();
			savetxt = savetxt + "|";
			savetxt += this.filloceanoption;
			savetxt = savetxt + "|";
			savetxt += this.spinningbgoption;
			savetxt = savetxt + "|";
			savetxt += this.oceanLog;
			savetxt = savetxt + "|";
			savetxt += this.weatherstationLevel;
			savetxt += "|end";
			return savetxt;
		},
		
		_save: function(){
			
			var savetxt = this._getsavetxt();
			
			savetxt = btoa(savetxt);
			if(typeof(Storage) !== "undefined") {
				window.localStorage.FtOSave = savetxt;
				this._makeNotice(0,"Game saved", 0,0,0,0);
			} else {
				this._makeNotice(0,"Game save failed", 0,0,0,0);
			}
		},
		
		_load: function(){
			var _self = this;
			var loadtxt = "0";
			if(typeof(Storage) !== "undefined") {
				
				loadtxt = window.localStorage.FtOSave;
				
				if (loadtxt){
				
					if (loadtxt != "0"){
						try{
						loadtxt = atob(loadtxt);
						}catch(e){
							//alert("The savefile is not a correct file or is corrupt.");
						}
						
						var la = loadtxt.split("|");
						
						if((la[0]=="v0.1")||(la[0]=="0.1.0")){
							
							if (la.length!=68){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else{
								this.loadedgame = 1;
								this._loadv010(la);
								this._loadend();
							}
						}else if ((la[0]=="0.1.1")){
							if (la.length!=69){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else {
								this.loadedgame = 1;
								this._loadv010(la);
								this._loadv011(la);
								this._loadend();
							}
						}else if ((la[0]=="0.1.2")){
							if (la.length!=71){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else {
								this.loadedgame = 1;
								this._loadv010(la);
								this._loadv011(la);
								this._loadv012(la);
								this._loadend();
							}
						}else if ((la[0]=="0.1.3")||(la[0]=="0.1.4")||(la[0]=="0.1.5")){
							if (la.length!=72){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else {
								this.loadedgame = 1;
								this._loadv010(la);
								this._loadv011(la);
								this._loadv012(la);
								this._loadv013(la);
								this._loadend();
							}
						}else if ((la[0]=="0.1.6")||(la[0]=="0.1.7")||(la[0]=="0.1.8")||(la[0]=="0.1.9")||(la[0]=="0.1.10")||(la[0]=="0.1.11")||(la[0]=="0.1.12")){
							if (la.length!=72){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else {
								this.loadedgame = 1;
								this._loadv010after015(la);
								this._loadv011(la);
								this._loadv012(la);
								this._loadv013(la);
								this._loadend();
							}
						}else if (la[0]=="0.1.13"){
							if (la.length!=73){
								alert("The savefile is not a correct file or is corrupt.");
								this.intro.fadeIn("fast");
							}else {
								this.loadedgame = 1;
								this._loadv010after015(la);
								this._loadv011(la);
								this._loadv012(la);
								this._loadv013(la);
								this._loadv0113(la);
								this._loadend();
							}
						}else {
							alert("The savefile is not a correct file or is corrupt.");
						}
					}else{
						
						this.intro.fadeIn("fast");
						this.cookieBanner.fadeIn("fast");
					}
				}else{
					
					this.intro.fadeIn("fast");
					this.cookieBanner.fadeIn("fast");
				}
			} else {
				// Sorry! No Web Storage support..
			
			}
			
			this.cloudvisible=0;
			var max = this.cloudend-this.cloudstart;
			var randomnum = Math.floor((Math.random() * max) + 1);

			var nextcl = this.cloudstart + randomnum;
			window.setTimeout(function(){_self._showcloud();}, nextcl);
			$('#loading').fadeOut("fast");
		},
		
		
		_loadv010: function(la){
			var _self = this;
			this.drops_in_bank = parseFloat(la[1]);
			this.total_drops_produced = parseFloat(la[2]);
			this.total_ever = parseFloat(la[3]);
			
			this.drops_in_ocean = parseFloat(la[4]);
			this.handmade_clicks = parseFloat(la[5]);
			this.handmade_drops = parseFloat(la[6]);
			this.cloudsclicked = parseFloat(la[7]);
			this.knowhow = parseFloat(la[8]);
			if (this.knowhow>0){
				this.contactDuration = this.contactDuration /10;
			}
			this.max_drops_in_ocean = parseFloat(la[9]);
			this.oceanPerc = (this.drops_in_ocean / this.max_drops_in_ocean *100).toFixed(4);
			this.oldExperiencePoints = parseFloat(la[10]);
			$.each(this.buildings, function(i, building) {
				if(la[11].charAt(i)=="1"){
					building.shown=1;
					if (_self.hasWebP==1){
						building.button.css({'background':'#C5CAE9 url("images/webp/'+ this.name +'.webp") no-repeat right center'});
					}else {
						building.button.css({'background':'#C5CAE9 url("images/png/'+ this.name +'.png") no-repeat right center'});
					}
				}else{
					building.shown=0;
				}
			});
			$.each(this.buildings, function(i, building) {
				
				building.quantity = parseFloat(la[i+12]);
				Game.totalBuildings = Game.totalBuildings + building.quantity;

				building.cost = Math.ceil(building.basecost * Math.pow(this.increase,this.quantity));
				if(building.shown==1){
					building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				} else{
					building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				}
			});
			this.upgrades = this.upgrades.sort(function(a, b){return a.id-b.id});
			$.each(this.upgrades, function(i, upgrade) {
				if(la[26].charAt(i)=="1"){
					_self.totalupgrades++;
					upgrade.bought = 1;
					upgrade.button.fadeOut("fast");
					upgrade.buttonBought.fadeIn("fast");
					if (upgrade.sort=="mouse"){
						_self.click_num_perc = _self.click_num_perc + upgrade.perc;
						
					} else if (upgrade.sort=="hand"){
						if (upgrade.other==0){
							_self.click_num = _self.click_num * upgrade.multiplier;
						}else {
							var buildingQuantity = Game.totalBuildings;
							_self.click_num = _self.click_num + (buildingQuantity*upgrade.multiplier);
			
						}
					} else if (upgrade.sort=="cloud"){
						if (upgrade.other==3){
							_self.stormduration = _self.stormduration * 2;
							_self.clickStormduration = _self.clickStormduration * 2;
							_self.turboDuration = _self.turboDuration * 2;
							_self.wrathduration = _self.wrathduration * 2;
							
						} else {
							_self.cloudstart = _self.cloudstart/2;
							_self.cloudend =  _self.cloudend/2;
							_self.cloudduration = _self.cloudduration * 2;
							
						}
						
					}else if (this.sort == "knowhow"){
						Game.knowhowPerc += 20;
					}else if (this.sort == "alientech"){
						Game.alientechNum++;
					}else if (this.sort == "poseidon"){
						Game.poseidonImage.show();
					}else if (this.sort == "crazyscientist"){
						Game.crazyscientistnum++;
					}
					Game.upgradesBought++;
					Game.boughtUpgradesTxt.text(Game.upgradesBought);
					Game.upgradesPerc = Math.floor((Game.upgradesBought/Game.upgrades.length)*100);
					Game.upgradesPercTxt.text(Game.upgradesPerc);
					
				}
			});
			
			$.each(this.achievements, function(i, achievement) {
				if(la[27].charAt(i)=="1"){
					this.unlocked = 1;
					this.button.fadeIn("fast");
					this.buttonLocked.fadeOut("fast");
					Game.achievementsUnlocked++;
					Game.unlockedAchievements.text(Game.achievementsUnlocked);
					Game.achievementsPerc = Math.floor((Game.achievementsUnlocked/Game.achievements.length)*100);
					Game.lemonade = Game.achievementsPerc * 4;
					Game.achievementsPercTxt.text(Game.achievementsPerc+ "% Mtn Eew");
					Game._setMtnEewLvl(Game.achievementsPerc);
				}
			});
			
			if (la[28].length>1){
				_self.alienNumber = 0;
				var maxAliens = _self.aliens.length;
				for (var i=0; i<maxAliens; i++){
					var newalien = _self.aliens.pop();
					var nAlien = Alien(newalien).init();
					_self.aliensList.push(nAlien);
				}

				var as = la[28].split("-");
				
				for(var i=0; i< (as.length-1); i++){
					if (as[i].charAt(0)=="1"){
						_self.alienNumber++;
						var transtxt = 'translate(0px, -111px) rotate('+ _self.aliensList[i].angle +'deg)'; 
						if (Game.hasWebP==1){
							_self.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/webp/alienlaser.webp)', 'transform':transtxt, 'transform-origin': '45px 222px' });
						}else{
							_self.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/png/alienlaser.png)', 'transform':transtxt, 'transform-origin': '45px 222px' });
						}
						_self.aliensList[i].div.addClass(_self.aliensList[i].hover);
						_self.aliensList[i].div.show();
						var assplit = as[i].split("+");
						
						_self.aliensList[i].dropsDrained = parseFloat(assplit[1]);
						
						_self.aliensList[i].active = 1;
					}else {
					// put on poplist
						_self.aliensPopList.push(_self.aliensList[i]);
						
					}
				}

				var end = _self.newAlienEnd * (1+(_self.alienNumber/10));
				var start = _self.newAlienBegin * (1+(_self.alienNumber/10));
				var max = end-start;
				var randomnum = Math.floor((Math.random() * max) + 1);
				var nextal = randomnum + start;
				window.setTimeout(function(){_self._newAlien();}, nextal);
			} else {
				_self.alienNumber = 0;
			}
			
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				if(la[29].charAt(i)=="1"){
					this.bought=1;
					if (this.sort=="unlock"){
						_self.useknowhow=1;
					}
					
					else if (this.sort=="cloud"){
						if (this.id==8||this.id==9){
							_self.cloudstart = _self.cloudstart - (_self.cloudstart*0.05);
							_self.cloudend = _self.cloudend - (_self.cloudend*0.05);
						}
						else if(this.id==10||this.id==11){
							_self.stormduration = _self.stormduration*1.05;
							_self.clickStormduration = _self.clickStormduration*1.05;
							_self.turboDuration = _self.turboDuration * 1.05;
							_self.wrathduration = _self.wrathduration * 1.05;
						}
					}
					else if (this.sort=="alien"){
						
						if (this.id==12){
							_self.contactDuration = _self.contactDuration/10;
						}
						else if (this.id==13){
							_self.newAlienBegin = _self.newAlienBegin/4;
							_self.newAlienEnd = _self.newAlienEnd/4;
						}
						else if (this.id==14||this.id==15){
							_self.alienDrainPerc += 1;
						}
					}
					else if (this.sort=="alientech"){
						_self.alientechStrength++;
						$.each(_self.upgrades, function(i, upgrade) {
							if(upgrade.sort="alientech"){
								var torepl = (_self.alientechStrength-1)+"%";
								var replw = _self.alientechStrength+"%";
								upgrade.description = upgrade.description.replace(torepl, replw);
							}
						});
					}else if(this.sort=="weatherstation"){
						_self.weatherstationImage.show();
					}
				}
			});
			
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				if(la[30].charAt(i)=="1"){
					this.shown=1;
				}
			});
			
			this.first_start = parseFloat(la[31]);
			
			var run_start_check = parseFloat(la[32]);
			if (run_start_check!=0){
				this.run_start = run_start_check;
			}
			
			var alienc = parseFloat(la[33]);
			var alient = parseFloat(la[34]);
			
			if ((_self.alienNumber==0)&&(alient>=10)){
				
				
					if (alienc==0){
						var ncontact = $.grep(Game.upgrades, function(e){ if (e.name == "First contact"){ return e;} });
						ncontact[0].button.show();
					}else {
						if (alienc==1){
								Game.aliencontact=0;
								Game._startContact();
						
						}else if(alienc==2){
								Game.aliencontact=1;
								Game._startContact();
						
						}else if (alienc==3){
							Game.aliencontact=2;
								Game._startContact();
																	
						}else if (alienc==4){
							
							Game._startAliens();
						
						}
					}
				
			}
			
			this.numberOption = parseFloat(la[35]);
			$.each(this.buildings, function(i, _building) {
				_building.changeButton();
			});
			
			if(this.numberOption == 0){
				this.numberOptionButton.text("Numbers: shortened");
			}else if(this.numberOption == 1){
				this.numberOptionButton.text("Numbers: scientific short");
			}else if(this.numberOption == 2){
				this.numberOptionButton.text("Numbers: scientific long");
			}
			
			this.cloudSoundOption = parseFloat(la[36]);
			if(this.cloudSoundOption == 0){
				this.cloudSoundOptionButton.text("Cloud sound: off");
			} else if (this.cloudSoundOption == 1) {
				this.cloudSoundOptionButton.text("Cloud sound: on");
			}
			
			var volvar = parseFloat(la[37]);
			this.volumePerc.text(volvar+"%");
			this.volumeSlider.val(volvar);
			
			for (var a=0;a<this.channel_max;a++) {	
				this.audiochannels[a]['channel'].volume = volvar/100;
			}
			
			this.littledropOption = parseFloat(la[38]);
			if(this.littledropOption == 0){
				this.littledropoptionButton.text("Animate little drops: no");
			} else if (this.littledropOption == 1) {
				this.littledropoptionButton.text("Animate little drops: yes");
			}
			
			this.animateTextOption = parseFloat(la[39]);
			if(this.animateTextOption == 0){
				this.animatetextoptionButton.text("Show number of drops: no");
			} else if (this.animateTextOption == 1) {
				this.animatetextoptionButton.text("Show number of drops: yes");
			}
			
			this.bgdropsOption = parseFloat(la[40]);
			if(this.bgdropsOption == 0){
				this.bgdropoptionButton.text("Little background drops: no");
			} else if (this.bgdropsOption == 1) {
				this.bgdropoptionButton.text("Little background drops: yes");
			}
			
			this.poseidonStarted = parseFloat(la[41]);
			if (this.poseidonStarted==2){
				this.templeImage.show();
				this.poseidonImage.removeClass();
			}
			this.pFoodTotal = parseFloat(la[42]);
			this.pLeatherTotal = parseFloat(la[43]);
			this.pFoodMaxCap =  parseFloat(la[44]);
			this.pFoodBarnCapStat.text(this.pFoodMaxCap);
			this.pFoodBarnCost = parseFloat(la[45]);
			this.pFoodBarnCostStat.text(this.pFoodBarnCost);
			this.pWoodTotal = parseFloat(la[46]);
			this.pWoodMaxCap =  parseFloat(la[47]);
			this.pWoodBarnCapStat.text(this.pWoodMaxCap);
			this.pWoodBarnCost = parseFloat(la[48]);
			this.pWoodBarnCostStat.text(this.pWoodBarnCost);
			this.pStoneTotal = parseFloat(la[49]);
			this.pStoneMaxCap =  parseFloat(la[50]);
			this.pStoneBarnCapStat.text(this.pStoneMaxCap);
			this.pStoneBarnCostWood = parseFloat(la[51]);
			this.pStoneBarnCostWoodStat.text(this.pStoneBarnCostWood);
			this.pStoneBarnCostStone = parseFloat(la[52]);
			this.pStoneBarnCostStoneStat.text(this.pStoneBarnCostStone);
			this.pTentTotal = parseFloat(la[53]);
			this.pTentStat.text(this.pTentTotal);
			this.pWoodenhouseTotal = parseFloat(la[54]);
			this.pWoodenhouseStat.text(this.pWoodenhouseTotal);
			this.pStonehouseTotal = parseFloat(la[55]);
			this.pStonehouseStat.text(this.pStonehouseTotal);
			this.pBuildersIdle = parseFloat(la[56]);
			this.pBuildersIdleStat.text(this.pBuildersIdle);
			this.pBuilderStat.text(this.pBuildersIdle);
			this.pWorkerTotal = parseFloat(la[57]);
			this.pWorkerStat.text(this.pWorkerTotal);
			this.pWorkerIdle = parseFloat(la[58]);
			this.pWorkerIdleStat.text(this.pWorkerIdle);
			this.pFarmerTotal = parseFloat(la[59]);
			this.pFarmerStat.text(this.pFarmerTotal);
			this.pWoodcutterTotal = parseFloat(la[60]);
			this.pWoodcutterStat.text(this.pWoodcutterTotal);
			this.pStonecutterTotal = parseFloat(la[61]);
			this.pStonecutterStat.text(this.pStonecutterTotal);
			
			this.pWorkerDie = parseFloat(la[62]);
			this.pWorkerDieStat.text(this.pWorkerDie);
			this.pTempleTotal = parseFloat(la[63]);
			this.pTempleStat.text(this.pTempleTotal);
			this.pWorkerMaxCap = parseFloat(la[64]);
			this.pWorkerMaxCapStat.text(this.pWorkerMaxCap);
			
			$.each(this.prayers, function(i, prayer) {
				if(la[65].charAt(i)=="1"){
					this.selected=1;
					Game._prayerSelected(i);
				}else {
					this.selected=0;
				}
			});
			
			this.sacrificeLevel = parseFloat(la[66]);
			this._sacrificeSet(this.sacrificeLevel-1);
		},
		
		_loadv010after015: function(la){
			var _self = this;
			this.drops_in_bank = parseFloat(la[1]);
			this.total_drops_produced = parseFloat(la[2]);
			this.total_ever = parseFloat(la[3]);
			
			this.drops_in_ocean = parseFloat(la[4]);
			this.handmade_clicks = parseFloat(la[5]);
			this.handmade_drops = parseFloat(la[6]);
			this.cloudsclicked = parseFloat(la[7]);
			this.knowhow = parseFloat(la[8]);
			if (this.knowhow>0){
				this.contactDuration = this.contactDuration /10;
			}
			this.max_drops_in_ocean = parseFloat(la[9]);
			this.oceanPerc = (this.drops_in_ocean / this.max_drops_in_ocean *100).toFixed(4);
			this.oldExperiencePoints = parseFloat(la[10]);
			$.each(this.buildings, function(i, building) {
				if(la[11].charAt(i)=="1"){
					building.shown=1;
					if (_self.hasWebP==1){
						building.button.css({'background':'#C5CAE9 url("images/webp/'+ this.name +'.webp") no-repeat right center'});
					}else {
						building.button.css({'background':'#C5CAE9 url("images/png/'+ this.name +'.png") no-repeat right center'});
					}
				}else{
					building.shown=0;
				}
			});
			$.each(this.buildings, function(i, building) {
				
				building.quantity = parseFloat(la[i+12]);
				Game.totalBuildings = Game.totalBuildings + building.quantity;

				building.cost = Math.ceil(building.basecost * Math.pow(this.increase,this.quantity));
				if(building.shown==1){
					building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				} else{
					building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				}
			});
			this.upgrades = this.upgrades.sort(function(a, b){return a.id-b.id});
			$.each(this.upgrades, function(i, upgrade) {
				if(la[26].charAt(i)=="1"){
					_self.totalupgrades++;
					upgrade.bought = 1;
					upgrade.button.fadeOut("fast");
					upgrade.buttonBought.fadeIn("fast");
					if (upgrade.sort=="mouse"){
						_self.click_num_perc = _self.click_num_perc + upgrade.perc;
						
					} else if (upgrade.sort=="hand"){
						if (upgrade.other==0){
							_self.click_num = _self.click_num * upgrade.multiplier;
						}else {
							var buildingQuantity = Game.totalBuildings;
							_self.click_num = _self.click_num + (buildingQuantity*upgrade.multiplier);
			
						}
					} else if (upgrade.sort=="cloud"){
						if (upgrade.other==3){
							_self.stormduration = _self.stormduration * 2;
							_self.clickStormduration = _self.clickStormduration * 2;
							_self.turboDuration = _self.turboDuration * 2;
							_self.wrathduration = _self.wrathduration * 2;
						} else {
							_self.cloudstart = _self.cloudstart/2;
							_self.cloudend =  _self.cloudend/2;
							_self.cloudduration = _self.cloudduration * 2;
							
						}
						
					}else if (this.sort == "knowhow"){
						Game.knowhowPerc += 20;
					}else if (this.sort == "alientech"){
						Game.alientechNum++;
					}else if (this.sort == "poseidon"){
						Game.poseidonImage.show();
					}else if (this.sort == "crazyscientist"){
						Game.crazyscientistnum++;
					}
					Game.upgradesBought++;
					Game.boughtUpgradesTxt.text(Game.upgradesBought);
					Game.upgradesPerc = Math.floor((Game.upgradesBought/Game.upgrades.length)*100);
					Game.upgradesPercTxt.text(Game.upgradesPerc);
					
				}
			});
			
			$.each(this.achievements, function(i, achievement) {
				if(la[27].charAt(i)=="1"){
					this.unlocked = 1;
					this.button.fadeIn("fast");
					this.buttonLocked.fadeOut("fast");
					Game.achievementsUnlocked++;
					Game.unlockedAchievements.text(Game.achievementsUnlocked);
					Game.achievementsPerc = Math.floor((Game.achievementsUnlocked/Game.achievements.length)*100);
					Game.lemonade = Game.achievementsPerc * 4;
					Game.achievementsPercTxt.text(Game.achievementsPerc+ "% Mtn Eew");
					Game._setMtnEewLvl(Game.achievementsPerc);
				}
			});
			
			if (la[28].length>1){
				_self.alienNumber = 0;
				var maxAliens = _self.aliens.length;
				for (var i=0; i<maxAliens; i++){
					var newalien = _self.aliens.pop();
					var nAlien = Alien(newalien).init();
					_self.aliensList.push(nAlien);
				}

				var as = la[28].split("-");
				
				for(var i=0; i< (as.length-1); i++){
					if (as[i].charAt(0)=="1"){
						_self.alienNumber++;
						var transtxt = 'translate(0px, -111px) rotate('+ _self.aliensList[i].angle +'deg)'; 
						if (Game.hasWebP==1){
							_self.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/webp/alienlaser.webp)', 'transform':transtxt, 'transform-origin': '45px 222px' });
						}else{
							_self.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/png/alienlaser.png)', 'transform':transtxt, 'transform-origin': '45px 222px' });
						}
						_self.aliensList[i].div.addClass(_self.aliensList[i].hover);
						_self.aliensList[i].div.show();
						var assplit = as[i].split("::");
						
						_self.aliensList[i].dropsDrained = parseFloat(assplit[1]);
						
						_self.aliensList[i].active = 1;
					}else {
					// put on poplist
						_self.aliensPopList.push(_self.aliensList[i]);
						
					}
				}

				var end = _self.newAlienEnd * (1+(_self.alienNumber/10));
				var start = _self.newAlienBegin * (1+(_self.alienNumber/10));
				var max = end-start;
				var randomnum = Math.floor((Math.random() * max) + 1);
				var nextal = randomnum + start;
				window.setTimeout(function(){_self._newAlien();}, nextal);
			} else {
				_self.alienNumber = 0;
			}
			
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				if(la[29].charAt(i)=="1"){
					this.bought=1;
					if (this.sort=="unlock"){
						_self.useknowhow=1;
					}
					
					else if (this.sort=="cloud"){
						if (this.id==8||this.id==9){
							_self.cloudstart = _self.cloudstart - (_self.cloudstart*0.05);
							_self.cloudend = _self.cloudend - (_self.cloudend*0.05);
						}
						else if(this.id==10||this.id==11){
							_self.stormduration = _self.stormduration*1.05;
							_self.clickStormduration = _self.clickStormduration*1.05;
							_self.turboDuration = _self.turboDuration * 1.05;
							_self.wrathduration = _self.wrathduration * 1.05;
						}
					}
					else if (this.sort=="alien"){
						
						if (this.id==12){
							_self.contactDuration = _self.contactDuration/10;
						}
						else if (this.id==13){
							_self.newAlienBegin = _self.newAlienBegin/4;
							_self.newAlienEnd = _self.newAlienEnd/4;
						}
						else if (this.id==14||this.id==15){
							_self.alienDrainPerc += 1;
						}
					}
					else if (this.sort=="alientech"){
						_self.alientechStrength++;
						$.each(_self.upgrades, function(i, upgrade) {
							if(upgrade.sort=="alientech"){
								var torepl = (_self.alientechStrength-1)+"%";
								var replw = _self.alientechStrength+"%";
								upgrade.description = upgrade.description.replace(torepl, replw);
							}
						});
					}else if(this.sort=="weatherstation"){
						_self.weatherstationImage.show();
					}
				}
			});
			
			$.each(this.knowhowupgrades, function(i, kupgrade) {
				if(la[30].charAt(i)=="1"){
					this.shown=1;
				}
			});
			
			this.first_start = parseFloat(la[31]);
			
			var run_start_check = parseFloat(la[32]);
			if (run_start_check!=0){
				this.run_start = run_start_check;
			}
			
			var alienc = parseFloat(la[33]);
			var alient = parseFloat(la[34]);
			
			if ((_self.alienNumber==0)&&(alient>=10)){
				
				
					if (alienc==0){
						var ncontact = $.grep(Game.upgrades, function(e){ if (e.name == "First contact"){ return e;} });
						ncontact[0].button.show();
					}else {
						if (alienc==1){
								Game.aliencontact=0;
								Game._startContact();
						
						}else if(alienc==2){
								Game.aliencontact=1;
								Game._startContact();
						
						}else if (alienc==3){
							Game.aliencontact=2;
								Game._startContact();
																	
						}else if (alienc==4){
							
							Game._startAliens();
						
						}
					}
				
			}
			
			this.numberOption = parseFloat(la[35]);
			$.each(this.buildings, function(i, _building) {
				_building.changeButton();
			});
			
			if(this.numberOption == 0){
				this.numberOptionButton.text("Numbers: shortened");
			}else if(this.numberOption == 1){
				this.numberOptionButton.text("Numbers: scientific short");
			}else if(this.numberOption == 2){
				this.numberOptionButton.text("Numbers: scientific long");
			}
			
			this.cloudSoundOption = parseFloat(la[36]);
			if(this.cloudSoundOption == 0){
				this.cloudSoundOptionButton.text("Cloud sound: off");
			} else if (this.cloudSoundOption == 1) {
				this.cloudSoundOptionButton.text("Cloud sound: on");
			}
			
			var volvar = parseFloat(la[37]);
			this.volumePerc.text(volvar+"%");
			this.volumeSlider.val(volvar);
			
			for (var a=0;a<this.channel_max;a++) {	
				this.audiochannels[a]['channel'].volume = volvar/100;
			}
			
			this.littledropOption = parseFloat(la[38]);
			if(this.littledropOption == 0){
				this.littledropoptionButton.text("Animate little drops: no");
			} else if (this.littledropOption == 1) {
				this.littledropoptionButton.text("Animate little drops: yes");
			}
			
			this.animateTextOption = parseFloat(la[39]);
			if(this.animateTextOption == 0){
				this.animatetextoptionButton.text("Show number of drops: no");
			} else if (this.animateTextOption == 1) {
				this.animatetextoptionButton.text("Show number of drops: yes");
			}
			
			this.bgdropsOption = parseFloat(la[40]);
			if(this.bgdropsOption == 0){
				this.bgdropoptionButton.text("Little background drops: no");
			} else if (this.bgdropsOption == 1) {
				this.bgdropoptionButton.text("Little background drops: yes");
			}
			
			this.poseidonStarted = parseFloat(la[41]);
			if (this.poseidonStarted==2){
				this.templeImage.show();
				this.poseidonImage.removeClass();
			}
			this.pFoodTotal = parseFloat(la[42]);
			this.pLeatherTotal = parseFloat(la[43]);
			this.pFoodMaxCap =  parseFloat(la[44]);
			this.pFoodBarnCapStat.text(this.pFoodMaxCap);
			this.pFoodBarnCost = parseFloat(la[45]);
			this.pFoodBarnCostStat.text(this.pFoodBarnCost);
			this.pWoodTotal = parseFloat(la[46]);
			this.pWoodMaxCap =  parseFloat(la[47]);
			this.pWoodBarnCapStat.text(this.pWoodMaxCap);
			this.pWoodBarnCost = parseFloat(la[48]);
			this.pWoodBarnCostStat.text(this.pWoodBarnCost);
			this.pStoneTotal = parseFloat(la[49]);
			this.pStoneMaxCap =  parseFloat(la[50]);
			this.pStoneBarnCapStat.text(this.pStoneMaxCap);
			this.pStoneBarnCostWood = parseFloat(la[51]);
			this.pStoneBarnCostWoodStat.text(this.pStoneBarnCostWood);
			this.pStoneBarnCostStone = parseFloat(la[52]);
			this.pStoneBarnCostStoneStat.text(this.pStoneBarnCostStone);
			this.pTentTotal = parseFloat(la[53]);
			this.pTentStat.text(this.pTentTotal);
			this.pWoodenhouseTotal = parseFloat(la[54]);
			this.pWoodenhouseStat.text(this.pWoodenhouseTotal);
			this.pStonehouseTotal = parseFloat(la[55]);
			this.pStonehouseStat.text(this.pStonehouseTotal);
			this.pBuildersIdle = parseFloat(la[56]);
			this.pBuildersIdleStat.text(this.pBuildersIdle);
			this.pBuilderStat.text(this.pBuildersIdle);
			this.pWorkerTotal = parseFloat(la[57]);
			this.pWorkerStat.text(this.pWorkerTotal);
			this.pWorkerIdle = parseFloat(la[58]);
			this.pWorkerIdleStat.text(this.pWorkerIdle);
			this.pFarmerTotal = parseFloat(la[59]);
			this.pFarmerStat.text(this.pFarmerTotal);
			this.pWoodcutterTotal = parseFloat(la[60]);
			this.pWoodcutterStat.text(this.pWoodcutterTotal);
			this.pStonecutterTotal = parseFloat(la[61]);
			this.pStonecutterStat.text(this.pStonecutterTotal);
			
			this.pWorkerDie = parseFloat(la[62]);
			this.pWorkerDieStat.text(this.pWorkerDie);
			this.pTempleTotal = parseFloat(la[63]);
			this.pTempleStat.text(this.pTempleTotal);
			this.pWorkerMaxCap = parseFloat(la[64]);
			this.pWorkerMaxCapStat.text(this.pWorkerMaxCap);
			
			$.each(this.prayers, function(i, prayer) {
				if(la[65].charAt(i)=="1"){
					this.selected=1;
					Game._prayerSelected(i);
				}else {
					this.selected=0;
				}
			});
			
			this.sacrificeLevel = parseFloat(la[66]);
			this._sacrificeSet(this.sacrificeLevel-1);
		},
		
		_loadv011: function(la){
			this.lastsavetime = parseFloat(la[67]);
			if (this.knowhowupgrades[22].bought==1){
				this.offlineperc = 40;
				this.offlinetime = 86400000;
			}
			if (this.knowhowupgrades[23].bought==1){
				this.offlinetime = 129600000;
			}
			if (this.knowhowupgrades[24].bought==1){
				this.offlineperc = 50;
			}
			if (this.knowhowupgrades[25].bought==1){
				this.offlinetime = 172800000;
			}
			if (this.knowhowupgrades[26].bought==1){
				this.offlineperc = 55;
			}
			if (this.knowhowupgrades[27].bought==1){
				this.offlinetime = 216000000;
			}
			if (this.knowhowupgrades[28].bought==1){
				this.offlineperc = 60;
			}
			if (this.knowhowupgrades[29].bought==1){
				this.offlinetime = 259200000;
			}
			if (this.knowhowupgrades[30].bought==1){
				this.offlineperc = 65;
			}
			if (this.knowhowupgrades[31].bought==1){
				this.offlinetime = 302400000;
			}
			if (this.knowhowupgrades[32].bought==1){
				this.offlineperc = 70;
			}
			if (this.knowhowupgrades[33].bought==1){
				this.offlinetime = 345600000;
			}
			if (this.knowhowupgrades[34].bought==1){
				this.offlineperc = 75;
			}
			if (this.knowhowupgrades[35].bought==1){
				this.offlinetime = 432000000;
			}
			if (this.knowhowupgrades[36].bought==1){
				this.offlineperc = 80;
			}
			if (this.knowhowupgrades[37].bought==1){
				this.offlinetime = 518400000;
			}
			if (this.knowhowupgrades[38].bought==1){
				this.offlineperc = 85;
			}
			if (this.knowhowupgrades[39].bought==1){
				this.offlineperc = 95;
				this.offlinetime = 604800000;
			}
		},
		
		_loadv012: function(la){
			
			this.spinningbgoption = parseFloat(la[69]);
			if(this.spinningbgoption==1){
				this.spindropOptionButton.text("Spinning background big drop: yes");
				$('#dropbgimagea').removeClass();
				$('#dropbgimageb').removeClass();
				$('#dropbgimagea').addClass("rotatel");
				$('#dropbgimageb').addClass("rotater");
			}else{
				this.spindropOptionButton.text("Spinning background big drop: no");
				$('#dropbgimagea').removeClass();
				$('#dropbgimageb').removeClass();
			}
		},
		
		_loadv013: function(la){
			this.oceanLog = parseFloat(la[70]);
		},
		
		_loadv0113:function(la){
			this.weatherstationLevel = parseFloat(la[71]);
			this._changeWeatherstationText();
		},
		
		_loadend:function(){
			this.dropsInOcean.text(Beautify(this.drops_in_ocean.toFixed(this.decimals),0));
			var perc = (this.drops_in_ocean / this.max_drops_in_ocean)*100;
			this.percentageDropsInOcean.text(perc.toFixed(15));
			this.oceanLog = this._getOceanLog(this.drops_in_ocean);
			var percbar = this.oceanLog;
			
			if (perc>=25){
				this._startsun();
				this.sunactive=1;
			}else {
				this.sunactive=0;
			}
			var csstop = 100-percbar+'%';
			var cssheight = percbar + '%';
			this.progressBar.css({'top':csstop, 'height':cssheight});
			this.cps();
			
			$.each(this.buildings, function(i, building) {
				building.startstyle();
			});
			
			$.each(this.upgrades, function(i, upgrade) {
				upgrade.startstyle();
			});
	/*		if(this.offlineperc>0){
			
				this._offlineresult();
			}
		*/	
			this.intro.fadeOut("fast");
			this.cookieBanner.fadeOut("fast");
		},
		
		
		_offlineresult: function(){
			this.cps();
			
			var n = Date.now();
			
			
			var diff = n - this.lastsavetime;
			var offlinetimeb = msToTime(diff);
			if (diff>this.offlinetime){
				diff = this.offlinetime;
			}
			
			
			
			this.alienDrainOffline = this.cps_cur * this.alienNumber * (this.alienDrainPerc/100);
			
			
			var extraprod = 0;
			var extradrain = 0;
			
			$.each(this.buildings, function(i, building) {
				extraprod += building.produceOffline(diff);
			});
			
			$.each(this.aliensList, function(i, alien) {
				extradrain += alien.drainOffline(diff);
				
			});
			
			
			
			this.count.text(Beautify(Math.floor(this.drops_in_bank)));
			
			Game._makeNotice("clock", "Offline production", "You were offline for " +offlinetimeb+ ". While you were offline you gained " + Beautify(Math.floor(extraprod)) + " drops and aliens drained " + Beautify(Math.floor(extradrain)) + " drops", 0, 0,15000);
		},
		
		_click: function() {
			
			var self = this;
			self.dropContainer.removeClass("dropover");
			
			this.dropContainer.removeClass("hoverdrop");
			if(!this.dropContainer.hasClass("clickdrop")){
				this.dropContainer.addClass("clickdrop");
				window.setTimeout(function(){self.dropContainer.removeClass("clickdrop"); self.dropContainer.addClass("dropover");}, 500);
			}
			this.handmade_clicks++;
			this.click_num_tot = this.click_num + (this.click_num_perc * (this.cps_cur/100));
			if(this.clickStorm==1){
				this.click_num_tot = this.click_num_tot * 777;
			}
			if(this.wrath==1){
				this.click_num_tot = this.click_num_tot * 1111;
			}
			if (this.prayers[2].selected==1){
				this.click_num_tot = this.click_num_tot * 1.5;
			}
			if(this.animateTextOption==1){
				this._animateText(this.click_num_tot);
			}
			
			if(this.bgdropsOption==1){
				this._backgroundDrop();
			}
			
			if (this.littledropOption==1){
				var littledropDiv = $("<div class='littledrop'></div>");
				littledropDiv.css({'cursor':'pointer'});
				littledropDiv.click(function(){
					self._click();
				});
				$("body").append(littledropDiv);
				var w = littledropDiv.width();
				var posX = tempX-(w/2);
				var posY = tempY+30;
				littledropDiv.css({'left':posX,'top':posY});
				if (Math.random() >= 0.5){
					littledropDiv.addClass('littledropanimationleft');
				}else {
					littledropDiv.addClass('littledropanimationright');
				}
				littledropDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
					littledropDiv.remove();
				});
			}
			if(this.click_num_tot>0){
				this.handmade_drops = this.handmade_drops + this.click_num_tot;
				this.drops_in_bank = this.drops_in_bank + this.click_num_tot; if(this.drops_in_bank<0){this.drops_in_bank=0;}
				this.total_drops_produced = this.total_drops_produced + this.click_num_tot;
			
				this.total_ever += this.click_num_tot; 
			}
		},
		
		_backgroundDrop: function(){
			var self = this;
			if(this.maxbgdrops<40){
				this.maxbgdrops++;
				var littledropDiv = $("<div class='littledropbg'></div>");
				this.waves.append(littledropDiv);
				var wavesw = this.waves.width()-20;
				var posX = randomIntFromInterval(0,wavesw);
				littledropDiv.css({'display':'block','top':'0', 'left':posX});
				littledropDiv.addClass('bgdropanimation');
				littledropDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
						littledropDiv.remove();
						self.maxbgdrops--;
					});
			}
		},
				
		_clickOcean: function() {
			if (this.filloceanoption==1){
				var cont = "<h2 style='margin:0; text-align:center;'>Fill the ocean</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to use your drops to fill the ocean?<br />How many drops would you like to use?<br /><br /><p style='text-align:center; margin:0; padding:0;'><button class='tabs' onclick='Game._oceanClickGo(100);'>All</button>&nbsp;<button class='tabs' onclick='Game._oceanClickGo(90);'>90%</button>&nbsp;<button class='tabs' onclick='Game._oceanClickGo(75);'>75%</button>&nbsp;<button class='tabs' onclick='Game._oceanClickGo(50);'>50%</button>&nbsp;<button class='tabs' onclick='Game._oceanClickGo(25);'>25%</button>&nbsp;<button class='tabs' onclick='Game._oceanClickGo(10);'>10%</button>&nbsp;<button class='tabs' onclick='Game.alertNot.fadeOut(\"fast\");'>None</button></p>";
				Game._makeAlertNot(cont, 0);
			}else{
				this._oceanClickGo();
			}
		},
		
		_oceanClickGo: function(percd) {
			this.alertNot.fadeOut("fast");
			if (this.drops_in_bank>0){ if (percd<=100){
				this.drops_in_ocean = this.drops_in_ocean + (this.drops_in_bank/100*percd);
				this.drops_in_bank = this.drops_in_bank - (this.drops_in_bank/100*percd); if(this.drops_in_bank<0){this.drops_in_bank=0;}
				var perc = (this.drops_in_ocean / this.max_drops_in_ocean)*100;
				this.oceanPerc = Math.floor(perc); 
				this.dropsInOcean.text(Beautify(this.drops_in_ocean.toFixed(this.decimals),0));
				this.oceanLog = this._getOceanLog(this.drops_in_ocean);
				this.percentageDropsInOcean.text(perc.toFixed(15));
				var percbar = this.oceanLog;
				
				var csstop = 100-percbar+'%';
				var cssheight = percbar + '%';
				this.progressBar.css({'top':csstop, 'height':cssheight});
				
				if (perc>=25){
					this._startsun();
					this.sunactive=1;
				} else {
					this.sunactive=0;
				}
			}
			}
		},
		
		_getOceanLog: function(dio){
			var ret = 0;
			if (dio>=89000000000000000000000000){ret=99;} else if (dio>=54000000000000000000000000){ret=98} else if (dio>=33000000000000000000000000){ret=97} else if (dio>=20000000000000000000000000){ret=96}
			else if (dio>=12000000000000000000000000){ret=95} else if (dio>=7600000000000000000000000){ret=94} else if (dio>=4600000000000000000000000){ret=93} else if (dio>=2800000000000000000000000){ret=92}
			else if (dio>=1700000000000000000000000){ret=91} else if (dio>=1000000000000000000000000){ret=90} else if (dio>=650000000000000000000000){ret=89} else if (dio>=390000000000000000000000){ret=88}
			else if (dio>=240000000000000000000000){ret=87} else if (dio>=150000000000000000000000){ret=86} else if (dio>=90000000000000000000000){ret=85} else if (dio>=55000000000000000000000){ret=84}
			else if (dio>=34000000000000000000000){ret=83} else if (dio>=20000000000000000000000){ret=82} else if (dio>=12000000000000000000000){ret=81} else if (dio>=7700000000000000000000){ret=80}
			else if (dio>=4700000000000000000000){ret=79} else if (dio>=2900000000000000000000){ret=78} else if (dio>=1700000000000000000000){ret=77} else if (dio>=1100000000000000000000){ret=76}
			else if (dio>=660000000000000000000){ret=75} else if (dio>=400000000000000000000){ret=74} else if (dio>=240000000000000000000){ret=73} else if (dio>=150000000000000000000){ret=72}
			else if (dio>=92000000000000000000){ret=71} else if (dio>=56000000000000000000){ret=70} else if (dio>=34000000000000000000){ret=69} else if (dio>=21000000000000000000){ret=68}
			else if (dio>=12000000000000000000){ret=67} else if (dio>=7800000000000000000){ret=66} else if (dio>=4800000000000000000){ret=65} else if (dio>=2900000000000000000){ret=64}
			else if (dio>=1800000000000000000){ret=63} else if (dio>=1100000000000000000){ret=62} else if (dio>=670000000000000000){ret=61} else if (dio>=410000000000000000){ret=60}
			else if (dio>=250000000000000000){ret=59} else if (dio>=150000000000000000){ret=58} else if (dio>=93000000000000000){ret=57} else if (dio>=57000000000000000){ret=56}
			else if (dio>=35000000000000000){ret=55} else if (dio>=21000000000000000){ret=54} else if (dio>=13000000000000000){ret=53} else if (dio>=8000000000000000){ret=52}
			else if (dio>=4900000000000000){ret=51} else if (dio>=3000000000000000){ret=50} else if (dio>=1800000000000000){ret=49} else if (dio>=1100000000000000){ret=48}
			else if (dio>=680000000000000){ret=47} else if (dio>=410000000000000){ret=46} else if (dio>=250000000000000){ret=45} else if (dio>=150000000000000){ret=44}
			else if (dio>=95000000000000){ret=43} else if (dio>=58000000000000){ret=42} else if (dio>=35000000000000){ret=41} else if (dio>=22000000000000){ret=40}
			else if (dio>=13000000000000){ret=39} else if (dio>=8100000000000){ret=38} else if (dio>=5000000000000){ret=37} else if (dio>=3000000000000){ret=36}
			else if (dio>=1800000000000){ret=35} else if (dio>=1100000000000){ret=34} else if (dio>=690000000000){ret=33} else if (dio>=420000000000){ret=32}
			else if (dio>=260000000000){ret=31} else if (dio>=160000000000){ret=30} else if (dio>=96812710945){ret=29} else if (dio>=59176473683){ret=28}
			else if (dio>=36171438681){ret=27} else if (dio>=22109681346){ret=26} else if (dio>=13514475150){ret=25} else if (dio>=8260681632){ret=24}
			else if (dio>=5049316401){ret=23} else if (dio>=3086379218){ret=22} else if (dio>=1886539864){ret=21} else if (dio>=1153141726){ret=20}
			else if (dio>=704854356){ret=19} else if (dio>=430840070){ret=18} else if (dio>=263349676){ret=17} else if (dio>=160971685){ret=16}
			else if (dio>=98393450){ret=15} else if (dio>=60142695){ret=14} else if (dio>=36762039){ret=13} else if (dio>=22470684){ret=12}
			else if (dio>=13735136){ret=11} else if (dio>=8395560){ret=10} else if (dio>=5131760){ret=9} else if (dio>=3136773){ret=8}
			else if (dio>=1917342){ret=7} else if (dio>=1171970){ret=6} else if (dio>=716363){ret=5} else if (dio>=437874){ret=4}
			else if (dio>=267649){ret=3} else if (dio>=163600){ret=2} else if (dio>=100000){ret=1}
			return ret;
		},
		
		_startsun: function(){
			var self = this;
			
			var max = this.sunend-this.sunstart;
			var randomnum = Math.floor((Math.random() * max) + 1);

			var nextsun = this.sunstart + randomnum;
			window.setTimeout(function(){self._showsun();}, nextsun);
		},
		
		
		_showsun:function(){ 
			
			var self = this;
			if (this.sunactive==1){
				this.sunclick = 0;
				var i = 0;
				var interv = setInterval(frame, 10);
				var dw = $( document ).width();
				var dh = $( document ).height();
				var randomw = Math.floor((Math.random() * (dw-200))) + "px";
				var randomh = Math.floor((Math.random() * (dh-200))) + "px";
				
				
				function frame() { 
				
					if (self.sunvisible == 0){
						
						if (i==100){
								clearInterval(interv);
								window.setTimeout(function(){self._hidesun();}, self.sunduration);
								self.sunvisible = 1;
								
						}else{
							self.sun.css({'display':'block', '-moz-opacity': i/100, 'opacity':i/100, 'filter': 'alpha(opacity='+i+')', 'left':randomw, 'top':randomh});
							i++;
						}
						
					}else {
						clearInterval(interv);
						
						
					}
				}
			}
		},

		_hidesun: function(){

			if (this.sunvisible==1){
				var self = this
			
				var i = 0;
				var interv = setInterval(frame, 10);
				
				function frame() { 
					if (i==100){
							clearInterval(interv);
							self.sun.css({'display':'none'});
							if (self.sunvisible==1){
								self.sunvisible=0;
								var max = self.sunend-self.sunstart;
								var randomnum = Math.floor((Math.random() * max) + 1);
								var nextsun = randomnum + self.sunstart;
								window.setTimeout(function(){self._showsun();}, nextsun);
								self.sunclick=0;
								self.sunclicks.text(self.sunclick);
							}
					}else{
						self.sun.css({'display':'block', '-moz-opacity': (100-i)/100, 'opacity':(100-i)/100, 'filter': 'alpha(opacity='+(100-i)+')'});
					}
					i++;
				}
				
			}
			
		},
		
		_sunclicked: function(){
			var self = this;
			this.sunclick++;
			this.sunclicks.text(this.sunclick);
			if (this.sunclick==3){
				this.sunclick=0; this.sunclicks.text(this.sunclick);
				this.sun.css({'display':'none'});
				this.sunvisible=0;
				var max = this.sunend-this.sunstart;
				var randomnum = Math.floor((Math.random() * max) + 1);
				var nextsun = this.sunstart + randomnum;
				
				window.setTimeout(function(){self._showsun();}, nextsun);
			}
		},
		
		
		_tick: function(diff) {
			
			if ((this.drops_in_ocean>=this.max_drops_in_ocean_c)&&(this.max_drops_in_ocean==this.max_drops_in_ocean_c)){
				clearInterval(this.handle);
				clearInterval(this.handleother);
				clearInterval(this.handlesave);
			}else if ((this.drops_in_ocean>=this.max_drops_in_ocean_b)&&(this.max_drops_in_ocean==this.max_drops_in_ocean_b)){
				clearInterval(this.handle);
				clearInterval(this.handleother);
				clearInterval(this.handlesave);
				$('#endscreenb').show();
			}else if ((this.drops_in_ocean>=this.max_drops_in_ocean_a)&&(this.max_drops_in_ocean==this.max_drops_in_ocean_a)){
				clearInterval(this.handle);
				clearInterval(this.handleother);
				clearInterval(this.handlesave);
				$('#endscreena').show();
			}
			if (this.alienNumber!=0){
				this.alienDrain = this.cps_cur * this.alienNumber * (this.alienDrainPerc/100);
				
				
				$.each(this.aliensList, function(i, alien) {
					alien.drain(diff);
				
				});
				
			}else {
				this.alienDrain = 0;
			}
			
			
			$.each(this.buildings, function(i, building) {
				building.produce(diff);
				building.check();
			});
			
			
			
			$.each(this.upgrades, function(i, upgrade) {
			
				upgrade.check();
			});
			
			$.each(this.achievements, function(i, achievement) {
				
				achievement.check();
			});
			
			$.each(this.prayers, function(i, prayer) {
				
				prayer.check();
			});
			
			this.count.text(Beautify(Math.floor(this.drops_in_bank)));
			
			var exp = Math.cbrt(this.total_ever/1000000000000)-this.knowhow;
			
			this.experience = Math.floor(exp);
			
					
			var expperc = exp%1;
			var exppercstr = expperc.toString();
			this.experiencePerc = parseFloat(exppercstr.substring(2,4)+'.'+exppercstr.substring(4,6));
			var perctxt = this.experiencePerc + '%';
			if(perctxt!=this.oldperctxt){
				this.experienceProgress.css({'width':perctxt});
				this.oldperctxt = perctxt;
			}
			this.experienceNum.text(this.experience);
			
			
			if ((this.sunvisible==1)&&(this.drops_in_ocean>(this.sunloss/1000*diff))){
				this.drops_in_ocean = this.drops_in_ocean - (this.sunloss/1000*diff);
				var perc = (this.drops_in_ocean / this.max_drops_in_ocean)*100;
				this.dropsInOcean.text(Beautify(this.drops_in_ocean.toFixed(this.decimals),0));
				this.percentageDropsInOcean.text(perc.toFixed(15));
				this.oceanLog = this._getOceanLog(this.drops_in_ocean);
				var percbar = this.oceanLog;
				if(percbar!=this.oldpercbar){
					var csstop = 100-percbar+'%';
					var cssheight = percbar + '%';
					this.progressBar.css({'top':csstop, 'height':cssheight});
					this.oldpercbar=percbar;
				}
			}
			
				var wheight = this.waves.height();
				var perc = this._getPerc();
				if(perc>100){
					perc=100;
				}
				perc = 100- perc;
				var hpos = Math.floor(wheight/2 + ((wheight/2)/100*perc));
				if ((this.outerWaves.position().top!=hpos)&&(this.wavesanimation==0)){
					var self = this;
					this.wavesanimation=1;
					this.outerWaves.animate({top: hpos}, 3000, 'swing', function(){self.wavesanimation=0;});
				}
				
						
				if (this.alienDrain==0){
					if (this.cpsDisplayColor==1){
						//this.cpsDisplay.css({'color':'#ffffff'});
						this.cpsDisplay.removeClass("cpsred");
						this.cpsDisplay.addClass("cpswhite");
						
						this.cpsDisplayColor=0;
					}
					this.cpsDisplay.text(Beautify(this.cps_cur.toFixed(2)));
				}
				else {
					if (this.cpsDisplayColor==0){
						//this.cpsDisplay.css({'color':'red'});
						this.cpsDisplay.removeClass("cpswhite");
						this.cpsDisplay.addClass("cpsred");
						
						this.cpsDisplayColor=1;
					}
					var percDrain = this.alienNumber*this.alienDrainPerc;
						var cpsToDisplay = this.cps_cur - (this.cps_cur*percDrain/100);
						var txt = Beautify(cpsToDisplay.toFixed(0)) + " drained by " + Math.round(percDrain) + "%";
						this.cpsDisplay.text(txt);
				}
				
				// poseidon Minigame
				if(this.poseidonStarted==1){
					this.pFoodTotalStat.text(Beautify((this.pFoodTotal).toFixed(0)));
					this.pLeatherTotalStat.text(Beautify((this.pLeatherTotal).toFixed(0)));
					this.pWoodTotalStat.text(Beautify((this.pWoodTotal).toFixed(0)));
					this.pStoneTotalStat.text(Beautify((this.pStoneTotal).toFixed(0)));
				}else if (this.poseidonStarted==2){
					this._scarificeCheck();
				}
				// end poseidon Minigame
				if((this.weatherstationLevel>0)&&(this.weatherstationLevel<9)){
					this._weatherstationCheck();
				}
		},
		
		_getPerc:function(){
			var ret = 0;
			if ((1500<this.drops_in_bank)&&(this.drops_in_bank<=10000)){ret = 1;}
			else if((10000<this.drops_in_bank)&&(this.drops_in_bank<=25000)){ret =  2;}
			else if((25000<this.drops_in_bank)&&(this.drops_in_bank<=797160)){ret =  3;}
			else if((797160<this.drops_in_bank)&&(this.drops_in_bank<=22369620)){ret =  4;}
			else if((22369620<this.drops_in_bank)&&(this.drops_in_bank<=305175780)){ret =  5;}
			else if((305175780<this.drops_in_bank)&&(this.drops_in_bank<=2612138802)){ret =  6;}
			else if((2612138802<this.drops_in_bank)&&(this.drops_in_bank<=16148168400)){ret =  7;}
			else if((16148168400<this.drops_in_bank)&&(this.drops_in_bank<=78536544840)){ret =  8;}
			else if((78536544840<this.drops_in_bank)&&(this.drops_in_bank<=317733228540)){ret =  9;}
			else if((317733228540<this.drops_in_bank)&&(this.drops_in_bank<=1111111111110)){ret =  10;}
			else if((1111111111110<this.drops_in_bank)&&(this.drops_in_bank<=3452271214392)){ret =  11;}
			else if((3452271214392<this.drops_in_bank)&&(this.drops_in_bank<=9726655034460)){ret =  12;}
			else if((9726655034460<this.drops_in_bank)&&(this.drops_in_bank<=25239592216020)){ret =  13;}
			else if((25239592216020<this.drops_in_bank)&&(this.drops_in_bank<=61054982558010)){ret =  14;}
			else if((61054982558010<this.drops_in_bank)&&(this.drops_in_bank<=139013933454240)){ret =  15;}
			else if((139013933454240<this.drops_in_bank)&&(this.drops_in_bank<=300239975158032)){ret =  16;}
			else if((300239975158032<this.drops_in_bank)&&(this.drops_in_bank<=619036127056620)){ret =  17;}
			else if((619036127056620<this.drops_in_bank)&&(this.drops_in_bank<=1224880286215950)){ret =  18;}
			else if((1224880286215950<this.drops_in_bank)&&(this.drops_in_bank<=2336276859014280)){ret =  19;}
			else if((2336276859014280<this.drops_in_bank)&&(this.drops_in_bank<=4311578947368420)){ret =  20;}
			else if((4311578947368420<this.drops_in_bank)&&(this.drops_in_bank<=7723618886955972)){ret =  21;}
			else if((7723618886955972<this.drops_in_bank)&&(this.drops_in_bank<=13467145613480130)){ret =  22;}
			else if((13467145613480130<this.drops_in_bank)&&(this.drops_in_bank<=22910743724384880)){ret =  23;}
			else if((22910743724384880<this.drops_in_bank)&&(this.drops_in_bank<=38108188628928600)){ret =  24;}
			else if((38108188628928600<this.drops_in_bank)&&(this.drops_in_bank<=62088171641031896)){ret =  25;}
			else if((62088171641031896<this.drops_in_bank)&&(this.drops_in_bank<=99246114928149460)){ret =  26;}
			else if((99246114928149460<this.drops_in_bank)&&(this.drops_in_bank<=155867505885345250)){ret =  27;}
			else if((155867505885345250<this.drops_in_bank)&&(this.drops_in_bank<=240818941573998050)){ret =  28;}
			else if((240818941573998050<this.drops_in_bank)&&(this.drops_in_bank<=366451025462807230)){ret =  29;}
			else if((366451025462807230<this.drops_in_bank)&&(this.drops_in_bank<=549766551724137900)){ret =  30;}
			else if((549766551724137900<this.drops_in_bank)&&(this.drops_in_bank<=813918209914834700)){ret =  31;}
			else if((813918209914834700<this.drops_in_bank)&&(this.drops_in_bank<=1190112520884487200)){ret =  32;}
			else if((1190112520884487200<this.drops_in_bank)&&(this.drops_in_bank<=1720011062295265800)){ret =  33;}
			else if((1720011062295265800<this.drops_in_bank)&&(this.drops_in_bank<=2458736461986831400)){ret =  34;}
			else if((2458736461986831400<this.drops_in_bank)&&(this.drops_in_bank<=3478609346528894500)){ret =  35;}
			else if((3478609346528894500<this.drops_in_bank)&&(this.drops_in_bank<=4873763662273663000)){ret =  36;}
			else if((4873763662273663000<this.drops_in_bank)&&(this.drops_in_bank<=6765811783780036000)){ret =  37;}
			else if((6765811783780036000<this.drops_in_bank)&&(this.drops_in_bank<=9310757851967834000)){ret =  38;}
			else if((9310757851967834000<this.drops_in_bank)&&(this.drops_in_bank<=12707388120196856000)){ret =  39;}
			else if((12707388120196856000<this.drops_in_bank)&&(this.drops_in_bank<=17207401025641026000)){ret =  40;}
			else if((17207401025641026000<this.drops_in_bank)&&(this.drops_in_bank<=23127577557875340000)){ret =  41;}
			else if((23127577557875340000<this.drops_in_bank)&&(this.drops_in_bank<=30864334596069917000)){ret =  42;}
			else if((30864334596069917000<this.drops_in_bank)&&(this.drops_in_bank<=40911050578149786000)){ret =  43;}
			else if((40911050578149786000<this.drops_in_bank)&&(this.drops_in_bank<=53878604515772420000)){ret =  44;}
			else if((53878604515772420000<this.drops_in_bank)&&(this.drops_in_bank<=70519626362998270000)){ret =  45;}
			else if((70519626362998270000<this.drops_in_bank)&&(this.drops_in_bank<=91757019488523120000)){ret =  46;}
			else if((91757019488523120000<this.drops_in_bank)&&(this.drops_in_bank<=118717384915664850000)){ret =  47;;}
			else if((118717384915664850000<this.drops_in_bank)&&(this.drops_in_bank<=152770052525706600000)){ret =  48;}
			else if((152770052525706600000<this.drops_in_bank)&&(this.drops_in_bank<=195572507034328200000)){ret =  49;}
			else if((195572507034328200000<this.drops_in_bank)&&(this.drops_in_bank<=249123086734693860000)){ret =  50;}
			else if((249123086734693860000<this.drops_in_bank)&&(this.drops_in_bank<=315821931263133900000)){ret =  51;}
			else if((315821931263133900000<this.drops_in_bank)&&(this.drops_in_bank<=398541261515392350000)){ret =  52;}
			else if((398541261515392350000<this.drops_in_bank)&&(this.drops_in_bank<=500706190877047850000)){ret =  53;}
			else if((500706190877047850000<this.drops_in_bank)&&(this.drops_in_bank<=626387392708140700000)){ret =  54;}
			else if((626387392708140700000<this.drops_in_bank)&&(this.drops_in_bank<=780407085140222500000)){ret =  55;}
			else if((780407085140222500000<this.drops_in_bank)&&(this.drops_in_bank<=968459941329148800000)){ret =  56;}
			else if((968459941329148800000<this.drops_in_bank)&&(this.drops_in_bank<=1197250692008858400000)){ret =  57;}
			else if((1197250692008858400000<this.drops_in_bank)&&(this.drops_in_bank<=1474650358185208300000)){ret =  58;}
			else if((1474650358185208300000<this.drops_in_bank)&&(this.drops_in_bank<=1809873235795386800000)){ret =  59;}
			else if((1809873235795386800000<this.drops_in_bank)&&(this.drops_in_bank<=2213676951864406700000)){ret =  60;}
			else if((2213676951864406700000<this.drops_in_bank)&&(this.drops_in_bank<=2698588123869216000000)){ret =  61;}
			else if((2698588123869216000000<this.drops_in_bank)&&(this.drops_in_bank<=3279156381453603300000)){ret =  62;}
			else if((3279156381453603300000<this.drops_in_bank)&&(this.drops_in_bank<=3972239753131712300000)){ret =  63;}
			else if((3972239753131712300000<this.drops_in_bank)&&(this.drops_in_bank<=4797324681010433000000)){ret =  64;}
			else if((4797324681010433000000<this.drops_in_bank)&&(this.drops_in_bank<=5776884204716740000000)){ret =  65;}
			else if((5776884204716740000000<this.drops_in_bank)&&(this.drops_in_bank<=6936778152528157000000)){ret =  66;}
			else if((6936778152528157000000<this.drops_in_bank)&&(this.drops_in_bank<=8306699494096991000000)){ret =  67;}
			else if((8306699494096991000000<this.drops_in_bank)&&(this.drops_in_bank<=9920671346084658000000)){ret =  68;}
			else if((9920671346084658000000<this.drops_in_bank)&&(this.drops_in_bank<=11817599480465212000000)){ret =  69;}
			else if((11817599480465212000000<this.drops_in_bank)&&(this.drops_in_bank<=14041885566231883000000)){ret =  70;}
			else if((14041885566231883000000<this.drops_in_bank)&&(this.drops_in_bank<=16644106779792821000000)){ret =  71;}
			else if((16644106779792821000000<this.drops_in_bank)&&(this.drops_in_bank<=19681767848550770000000)){ret =  72;}
			else if((19681767848550770000000<this.drops_in_bank)&&(this.drops_in_bank<=23220132047135960000000)){ret =  73;}
			else if((23220132047135960000000<this.drops_in_bank)&&(this.drops_in_bank<=27333138147645726000000)){ret =  74;}
			else if((27333138147645726000000<this.drops_in_bank)&&(this.drops_in_bank<=32104410835214565000000)){ret =  75;}
			else if((32104410835214565000000<this.drops_in_bank)&&(this.drops_in_bank<=37628372639504774000000)){ret =  76;}
			else if((37628372639504774000000<this.drops_in_bank)&&(this.drops_in_bank<=44011466002515740000000)){ret =  77;}
			else if((44011466002515740000000<this.drops_in_bank)&&(this.drops_in_bank<=51373494704737670000000)){ret =  78;}
			else if((51373494704737670000000<this.drops_in_bank)&&(this.drops_in_bank<=59849094506439210000000)){ret =  79;}
			else if((59849094506439210000000<this.drops_in_bank)&&(this.drops_in_bank<=69589343530126590000000)){ret =  80;}
			else if((69589343530126590000000<this.drops_in_bank)&&(this.drops_in_bank<=80763523615333430000000)){ret =  81;}
			else if((80763523615333430000000<this.drops_in_bank)&&(this.drops_in_bank<=93561044619315940000000)){ret =  82;}
			else if((93561044619315940000000<this.drops_in_bank)&&(this.drops_in_bank<=108193544418400890000000)){ret =  83;}
			else if((108193544418400890000000<this.drops_in_bank)&&(this.drops_in_bank<=124897178186158980000000)){ret =  84;}
			else if((124897178186158980000000<this.drops_in_bank)&&(this.drops_in_bank<=143935111387793220000000)){ret =  85;}
			else if((143935111387793220000000<this.drops_in_bank)&&(this.drops_in_bank<=165600231836712060000000)){ret =  86;}
			else if((165600231836712060000000<this.drops_in_bank)&&(this.drops_in_bank<=190218097110817420000000)){ret =  87;}
			else if((190218097110817420000000<this.drops_in_bank)&&(this.drops_in_bank<=218150134624229060000000)){ret =  88;}
			else if((218150134624229060000000<this.drops_in_bank)&&(this.drops_in_bank<=249797112696685560000000)){ret =  89;}
			else if((249797112696685560000000<this.drops_in_bank)&&(this.drops_in_bank<=285602902059438200000000)){ret =  90;}
			else if((285602902059438200000000<this.drops_in_bank)&&(this.drops_in_bank<=326058548384867100000000)){ret =  91;}
			else if((326058548384867100000000<this.drops_in_bank)&&(this.drops_in_bank<=371706677629111700000000)){ret =  92;}
			else if((371706677629111700000000<this.drops_in_bank)&&(this.drops_in_bank<=423146257234581240000000)){ret =  93;}
			else if((423146257234581240000000<this.drops_in_bank)&&(this.drops_in_bank<=481037737554191600000000)){ret =  94;}
			else if((481037737554191600000000<this.drops_in_bank)&&(this.drops_in_bank<=546108599233516100000000)){ret =  95;}
			else if((546108599233516100000000<this.drops_in_bank)&&(this.drops_in_bank<=619159333722712200000000)){ret =  96;}
			else if((619159333722712200000000<this.drops_in_bank)&&(this.drops_in_bank<=701069885589140500000000)){ret =  97;}
			else if((701069885589140500000000<this.drops_in_bank)&&(this.drops_in_bank<=792806586866086600000000)){ret =  98;}
			else if((792806586866086600000000<this.drops_in_bank)&&(this.drops_in_bank<=895429615305069300000000)){ret =  99;}
			else if (895429615305069300000000<this.drops_in_bank){ret = 100;}
			this.waterLevel=1+(ret/100);
			if (this.waterLevel==1.01){
				this.waterLevel=1.00;
			}
			if (this.oldwaterLevel!=this.waterLevel){
				this.cps();
				
			}
			if((this.firstwater==0)&&(this.loadedgame==1)){
					this.firstwater=1;
					if(this.offlineperc>0){
						this._offlineresult();
					}
					this.loadedgame=0;
			}
			this.oldwaterLevel=this.waterLevel;
			return ret;
			
			
		},
		
		
		_tickother: function() {
			var timeNow = Date.now();
			var firstTime = timeNow - this.first_start;
			var runTime = timeNow - this.run_start;
			
			var firstSec = Math.floor(firstTime/1000); 
			var firstMin =  Math.floor(firstSec/60);
			var firstSecDef = firstSec%60;
			var firstHour = Math.floor(firstMin/60);
			var firstMinDef = firstMin%60;
			var firstDayDef = Math.floor(firstHour/24);
			var firstHourDef = firstHour%24;
			
			this.firstStart.text(firstDayDef + " days " + firstHourDef +" hours " + firstMinDef + " minutes " + firstSecDef + " seconds ago");
			
			var runSec = Math.floor(runTime/1000); 
			var runMin =  Math.floor(runSec/60);
			var runSecDef = runSec%60;
			var runHour = Math.floor(runMin/60);
			var runMinDef = runMin%60;
			var runDayDef = Math.floor(runHour/24);
			var runHourDef = runHour%24;
			
			this.runStart.text(runDayDef + " days " + runHourDef +" hours " + runMinDef + " minutes " + runSecDef + " seconds ago");
			
			var perc = (this.drops_in_ocean / this.max_drops_in_ocean)*100;
			if (perc<25){
				this.sunactive=0;
			}
			this.dropsInOcean.text(Beautify(this.drops_in_ocean.toFixed(this.decimals),0));
			
			this.totalcount.text(Beautify(this.total_drops_produced.toFixed(this.decimals),0));
			this.dropsInBankStats.text(Beautify(this.drops_in_bank.toFixed(this.decimals),0));
			this.dropsPerSecondStats.text(Beautify(this.cps_cur.toFixed(2),0));
			
			if (this.alienDrain==0){
				this.drainedStats.text("");
			}else {
				var txt = "(drained by "	+ Math.round(this.alienNumber*this.alienDrainPerc) + "%)";
				this.drainedStats.text(txt);
			}
			
			var totalDrain = 0;
			$.each(this.aliensList, function(i, _alien) {
					totalDrain += _alien.dropsDrained;
				});
				
			if (totalDrain>0){
				this.alienDrainStats.text(Beautify(totalDrain));
				this.alienDrainStat.fadeIn("fast");
			} else {
				this.alienDrainStats.text(Beautify(totalDrain));
				this.alienDrainStat.fadeOut("fast");
			}
			
			this.click_num_tot = this.click_num + (this.click_num_perc * this.cps_cur/100);
			this.dropsPerClickStats.text(Beautify(this.click_num_tot.toFixed(this.decimals),0));
			this.handmadeClicksStats.text(Beautify(this.handmade_clicks.toFixed(this.decimals),0));
			this.handmadeDropsStats.text(Beautify(this.handmade_drops.toFixed(this.decimals),0));
			this.dropsInOceanStats.text(Beautify(this.drops_in_ocean.toFixed(this.decimals),0));
			this.percentageDropsInOceanStats.text(perc.toFixed(4),0);
			this.multiplierStats.text(Beautify(this.totalmultiplier.toFixed(0),0));
			this.experienceStats.text(Beautify(this.experience,0));
			this.knowhowStats.text(Beautify(this.knowhow,0));
			this.totaleverStats.text(Beautify(this.total_ever.toFixed(0)));
			this.cloudclicksStats.text(Beautify(this.cloudsclicked));
			var percbar = this.oceanLog;
						
						var csstop = 100-percbar+'%';
						var cssheight = percbar + '%';
						this.progressBar.css({'top':csstop, 'height':cssheight});
						
			var expa = this.experience + this.knowhow;
			var nexttot = (expa+1)*(expa+1)*(expa+1)*1000000000000;
			var difneeded = nexttot - this.total_ever;
			
			this.dropsToNextExpStat.text(Beautify(difneeded));
			
			// poseidon Minigame
			if (this.poseidonStarted==1){ 
				if (this.pWorkerTotal>0){ 
					var foodProd = 0; 
					if(this.pFarmerTotal>0){
						foodProd = this.pFarmerTotal * this.pFarmerProduce;
					}  
					var foodDelta = foodProd - this.pWorkerTotal;
					
					var newFoodTotal = this.pFoodTotal + foodDelta;
					
					if (newFoodTotal < 0){
						this.pFoodShortage = this.pFoodShortage - newFoodTotal;
						newFoodTotal = 0;
						if (this.pFoodShortage>10){
							this.pFoodShortage=0;
							this.pWorkerTotal -= 1;
							this.pWorkerStat.text(this.pWorkerTotal);
							this.pWorkerDie++;
							this.pWorkerDieStat.text(this.pWorkerDie);
							if(this.pBuildersIdle>0){
								this.pBuildersIdle--;
								this.pBuilderStat.text(this.pBuildersIdle+this.pBuildersWorking); 
								this.pBuilderIdleStat.text(this.pBuildersIdle);
							}else if (this.pStonecutterTotal>0){
								this.pStonecutterTotal--;
								this.pStonecutterStat.text(this.pStonecutterTotal);
							}else if (this.pWoodcutterTotal>0){
								this.pWoodcutterTotal--;
								this.pWoodcutterStat.text(this.pWoodcutterTotal);
							}else if (this.pFarmerTotal>0){
								this.pFarmerTotal--;
								this.pFarmerStat.text(this.pStonecutterTotal);
							}else {
								this.pWorkerIdle--;
								this.pWorkerIdleStat.text(this.pWorkerIdle);
							}
						}
					}
					
					if (this.pFoodMaxCap>=newFoodTotal){
						this.pFoodTotal = newFoodTotal;
					}else {
						this.pFoodTotal = this.pFoodMaxCap;
					}
									
											
					if (this.pWoodcutterTotal>0){
						var extraWood = this.pWoodcutterTotal * this.pWoodcutterProduce;
						if(this.pWoodMaxCap>=(this.pWoodTotal+extraWood)){
							this.pWoodTotal +=extraWood;
						}else{
							this.pWoodTotal = this.pWoodMaxCap;
						}
					}
					if (this.pStonecutterTotal>0){
						var extraStone = this.pStonecutterTotal * this.pStonecutterProduce;
						if(this.pStoneMaxCap>=(this.pStoneTotal+extraStone)){
							this.pStoneTotal += extraStone;
						}else{
							this.pStoneTotal = this.pStoneMaxCap;
						}
					}
					
				}
			}
			
			//end poseidon Minigame
			
		},


		_startAliens: function(){
		
			var self = this;
			var end = self.newAlienEnd * (1+(self.alienNumber/10));
			var start = self.newAlienBegin * (1+(self.alienNumber/10));
			var max = end-start;
			
			var randomnum = Math.floor((Math.random() * max) + 1);
			
			var nextal = randomnum + start;
			var maxAliens = this.aliens.length;
			for (var i=0; i<maxAliens; i++){
				var newalien = this.aliens.pop();
				var nAlien = Alien(newalien).init();
				this.aliensList.push(nAlien);
				
				this.aliensPopList.push(nAlien);
			}
		
			window.setTimeout(function(){self._newAlien();}, nextal);
		},
		
		
		_newAlien: function(){
			
			var self = this;
			this.aliensPopList = this.aliensPopList.sort(function() { return 0.5 - Math.random() });

			
			if (this.aliensPopList.length>0){
				var nAlien = this.aliensPopList.pop();
			
				var starttxt = 'translate('+nAlien.startpos+'px, -411px) rotate(0.0deg)'; 
				if(Game.hasWebP==1){	
					nAlien.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/webp/alien.webp)', 'transform': starttxt, 'transform-origin': '45px 222px' });
				}
				else{
					nAlien.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/png/alien.png)', 'transform': starttxt, 'transform-origin': '45px 222px' });
				}
				nAlien.div.show();	
				var i = -411;
				var ia = 0;
				var interv = setInterval(frame, 10);
				nAlien.moving=1;
				function frame() { 
					if (i>=-111){
						clearInterval(interv);
						var interva = setInterval(framea, 5);
							function framea(){
								if (ia==(nAlien.angle*10)){
									var txt ='';
									if (nAlien.startpos>0){
										txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
										
									}else{
										txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
									}
									
									nAlien.div.css({'transform': txt});
									clearInterval(interva);
									if (Game.hasWebP == 1){
										nAlien.div.css({'background-image':'url(images/webp/alienlaser.webp)'});
									}else{
										nAlien.div.css({'background-image':'url(images/png/alienlaser.png)'});
									}
									nAlien.div.addClass(nAlien.hover);
									nAlien.active=1;
									nAlien.moving=0;
									Game.alienNumber++;
									var end = self.newAlienEnd * (1+(self.alienNumber/10));
									var start = self.newAlienBegin * (1+(self.alienNumber/10));
									var max = end-start;
									var randomnum = Math.floor((Math.random() * max) + 1);
									var nextal = randomnum + start;
									
									window.setTimeout(function(){self._newAlien();}, nextal);

								}
								else {
									var txt = '';
									if (nAlien.startpos>0){
										txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
										
									}else{
										txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
									}
									
									nAlien.div.css({'transform': txt});
									if (nAlien.moving==0){
										clearInterval(interva);
										var end = self.newAlienEnd * (1+(self.alienNumber/10));
										var start = self.newAlienBegin * (1+(self.alienNumber/10));
										var max = end-start;
										var randomnum = Math.floor((Math.random() * max) + 1);
										var nextal = randomnum + start;
									
										window.setTimeout(function(){self._newAlien();}, nextal);
									}
								}
								if (nAlien.angle>0){
									ia++;
								}else{
									ia--;
								}
							}
					}
					else {
						var txt = "translate("+nAlien.startpos+"px, "+i+"px) rotate(0.0deg)";
						
						nAlien.div.css({'transform': txt});
						
						if(nAlien.moving==0){
							clearInterval(interv);
							var end = self.newAlienEnd * (1+(self.alienNumber/10));
							var start = self.newAlienBegin * (1+(self.alienNumber/10));
							var max = end-start;
							var randomnum = Math.floor((Math.random() * max) + 1);
							var nextal = randomnum + start;
								
							window.setTimeout(function(){self._newAlien();}, nextal);
						}
					}
					i++;
				}
			}
			else {
				var end = self.newAlienEnd * (1+(self.alienNumber/10));
				var start = self.newAlienBegin * (1+(self.alienNumber/10));
				var max = end-start;
				var randomnum = Math.floor((Math.random() * max) + 1);
				var nextal = randomnum + start;
				
				window.setTimeout(function(){self._newAlien();}, nextal);
			}
						
		},
		
		_startContact: function(){
			var self = this;
			var i = 0;
			var interv = setInterval(countDown, 1000);
			
			function countDown(){
				if (i>=self.contactDuration){
					clearInterval(interv);
					self.contactStats.text("0 minutes 0 seconds");
					self.contactP.fadeOut("slow");
					
					
					if (self.aliencontact==0){
						
						var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Friendly aliens"){ return e;} });
						
						ncontact[0].button.fadeIn("fast");
						self.aliencontact++;
					}else if (self.aliencontact==1){
						var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Reluctant aliens"){ return e;} });
						
						ncontact[0].button.fadeIn("fast");
						self.aliencontact++;
					}else if (self.aliencontact==2){
						var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Aliens are mad"){ return e;} });
						
						ncontact[0].button.fadeIn("fast");
						self.aliencontact++;
					}
				}else{
					self.contactP.show();
					var t = self.contactDuration-i;
					var min = Math.floor(t/60);
					var sec = t%60;
					var txt = min + " minutes " + sec + " seconds"
					self.contactStats.text(txt);
				}
				i++;
			}
		},
		
	
		cps: function() {
			var self = this;
			var cps = 0;
			var buildingQuantity = Game.totalBuildings;
			
			if(Game.prayers[1].selected==1){
				this.crazyscientistsboost = (((this.lemonade*(10/100)))*this.crazyscientistnum*1.10).toFixed(2);
			} else if(Game.prayers[5].selected==1){
				this.crazyscientistsboost = (((this.lemonade*(10/100)))*this.crazyscientistnum*1.20).toFixed(2);
			}else if(Game.prayers[13].selected==1){
				this.crazyscientistsboost = (((this.lemonade*(10/100)))*this.crazyscientistnum*1.40).toFixed(2);
			}else {
				this.crazyscientistsboost = (((this.lemonade*(10/100)))*this.crazyscientistnum).toFixed(2);
			}
			
			$.each(this.buildings, function(i, building) {
				building.curproduction = building.production;
				
				$.each(Game.upgrades, function(i, upgrade) {
					if((upgrade.bought==1)&&(upgrade.effecton==building.name)){
						if (upgrade.other==0){
							building.curproduction = building.curproduction * upgrade.multiplier;
						}
						else if (upgrade.other == "all"){
							building.curproduction = building.curproduction + (buildingQuantity*upgrade.multiplier);
							
							
						}
					}
					if ((upgrade.bought==1)&&(upgrade.sort=="alientech")){
						if(upgrade.building==building.id){
							building.curproduction = building.curproduction + (building.curproduction*((Game.buildings[upgrade.pip].quantity/upgrade.pipnum)/100*Game.alientechStrength));
						}
					}
					if ((upgrade.bought==1)&&(upgrade.sort=="crazyscientist")){
						if(Game.prayers[1].selected==1){
							building.curproduction = building.curproduction + (building.curproduction*((Game.lemonade*(10/100))/100)*1.10);
						} else if(Game.prayers[5].selected==1){
							building.curproduction = building.curproduction + (building.curproduction*((Game.lemonade*(10/100))/100)*1.20);
						}else if(Game.prayers[13].selected==1){
							building.curproduction = building.curproduction + (building.curproduction*((Game.lemonade*(10/100))/100)*1.40);
						}else {
							building.curproduction = building.curproduction + (building.curproduction*((Game.lemonade*(10/100))/100));
						}
					}
					if ((upgrade.bought==1)&&(upgrade.sort=="collaboration")){
						if (upgrade.building==building.id){
							building.curproduction = building.curproduction + ((building.curproduction/100*5)*Game.buildings[upgrade.pipnum-1].quantity);
						}
						else if (upgrade.pipnum==building.id){
							building.curproduction = building.curproduction + ((building.curproduction/100*0.1)*Game.buildings[upgrade.building-1].quantity);
						}
					}
					
				});
				
				if((Game.prayers[3].selected==1)&&(building.id==2)){
					building.curproduction = building.curproduction + (building.curproduction/100*buildingQuantity*2);
				}
			});
			
			var percentagemultiplier = 0;
			$.each(Game.upgrades, function(i, upgrade) {
				if((upgrade.bought==1)&&((upgrade.sort=="multi")||(upgrade.sort=="ocean")||(upgrade.sort=="multiknowhow"))){
					percentagemultiplier = percentagemultiplier + upgrade.perc;
				}
			});
			this.totalmultiplier = percentagemultiplier;
			
			$.each(this.buildings, function(i, building) {
				
				if (percentagemultiplier != 0){
					building.curproduction = building.curproduction + (building.curproduction/100*percentagemultiplier);
					
				}
				if (self.storm==1){
					building.curproduction = building.curproduction * 7;
				}
				if (self.turbo==1){
					building.curproduction = building.curproduction * 30;
				}
				if ((self.knowhow>0)&&(self.useknowhow==1)){
					building.curproduction = building.curproduction + (building.curproduction/100*(self.knowhow/100*self.knowhowPerc));
				}
				
				if (self.waterLevel!=1){
					building.curproduction = building.curproduction * self.waterLevel;
				}
				
				if(Game.prayers[8].selected==1){
					building.curproduction = building.curproduction * 1.10;
				}else if(Game.prayers[12].selected==1){
					building.curproduction = building.curproduction * 1.20;
				}else if(Game.prayers[14].selected==1){
					building.curproduction = building.curproduction * 1.40;
				}else if (Game.prayers[15].selected==1){
					building.curproduction = building.curproduction * 2;
				}
				
				cps += building.curproduction * building.quantity;
				
			});
			
			if(this.bgdropsOption==1){
				if (cps>=1000000000000000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 50);
				}else if (cps>=1000000000000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 80);
				}else if (cps>=1000000000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 100);
				}else if (cps>=1000000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 250);
				}else if (cps>=100000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 500);
				}else if(cps>=10000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 600);
				}else if(cps>=1000){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 700);
				}else if (cps>=100){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 800);
				}else if (cps>=10){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 900);
				}else if (cps>=1){
					window.clearInterval(this.handlebgdrops);
					this.handlebgdrops = window.setInterval(function() {
						self._backgroundDrop();
					}, 1000);
				}
			}else {
				window.clearInterval(this.handlebgdrops);
			}
			
			this.cps_cur = cps;
			
		}
		
};


var Building = function(options) {
	return $.extend({
		quantity: 0,   
		increase: 1.15, 
		button: undefined, 
		curproduction: 0,
		active:0,
		shown:0,
		visible:0,
		basecost: 0,
		totalproduction: 0,
		style: 1,
				
		produceOffline: function(diff) {
			var countplus = 0;
			if (Game.alienDrain==0){
				countplus = (this.quantity * this.curproduction / 1000 * diff)*Game.waterLevel;
			}else{
				countplus = ((this.quantity * this.curproduction / 1000 * diff)- ((this.quantity * this.curproduction / 1000*diff)*Game.alienNumber*Game.alienDrainPerc/100))*Game.waterLevel;
			}
			countplus = countplus/100*Game.offlineperc;
			if(countplus>0){
				Game.drops_in_bank += countplus;
				Game.total_drops_produced += countplus;
				Game.total_ever += countplus; 
				this.totalproduction += countplus;
				return countplus;
			}else {
				return 0;
			}
		},
		
		produce: function(diff) {
			var countplus = 0;
			if (Game.alienDrain==0){
				countplus = (this.quantity * this.curproduction / 1000 * diff)*Game.waterLevel;
			}else{
				countplus = ((this.quantity * this.curproduction / 1000 * diff)- ((this.quantity * this.curproduction / 1000*diff)*Game.alienNumber*Game.alienDrainPerc/100))*Game.waterLevel;
			}
			if(countplus>0){
				Game.drops_in_bank += countplus;
				Game.total_drops_produced += countplus;
				Game.total_ever += countplus; 
				this.totalproduction += countplus;
			}
		},
		
		startstyle: function(){
			this.cost = Math.ceil(this.basecost * Math.pow(this.increase,this.quantity));
				if(Game.prayers[7].selected==1){
						this.cost = this.cost*0.95;
					}
					
				if (this.cost > Game.drops_in_bank) { 
					
						this.button.removeClass('buildingactive');
						this.button.addClass('buildingnonactive');
						//this.button.css({'-moz-opacity':'0.5','opacity':'.50','filter':'alpha(opacity=50)','cursor':'initial'});
						this.active=0;
						this.style=0;
					
				} else {
						this.button.removeClass('buildingnonactive');
						this.button.addClass('buildingactive');
						this.active=1;
						//this.button.css({'-moz-opacity':'1','opacity':'1','filter':'alpha(opacity=100)','cursor':'pointer'});
						this.style=1;
					
				}
		},
		
		check: function() {
			if (Game.buyBulk == 1){
				this.cost = Math.ceil(this.basecost * Math.pow(this.increase,this.quantity));
				if(Game.prayers[7].selected==1){
						this.cost = this.cost*0.95;
					}
					
				if (this.cost > Game.drops_in_bank) { 
					this.active=0;
					if (this.style!=0){
						//this.button.css({'-moz-opacity':'0.5','opacity':'.50','filter':'alpha(opacity=50)','cursor':'initial'});
						this.button.removeClass('buildingactive');
						this.button.addClass('buildingnonactive');
						this.style=0;
					}
				} else {
					this.active=1;
					if (this.style!=1){
						this.button.removeClass('buildingnonactive');
						this.button.addClass('buildingactive');
						//this.button.css({'-moz-opacity':'1','opacity':'1','filter':'alpha(opacity=100)','cursor':'pointer'});
						this.style=1;
					}
				}
			} else if (Game.buyBulk == 10){
				this.cost = this.buyBulkCalc(10);
				if(Game.prayers[7].selected==1){
						this.cost = this.cost*0.95;
					}
				if (this.cost > Game.drops_in_bank) {
					this.active=0;
					if (this.style!=0){
						//this.button.css({'-moz-opacity':'0.5','opacity':'.50','filter':'alpha(opacity=50)','cursor':'initial'});
						this.button.removeClass('buildingactive');
						this.button.addClass('buildingnonactive');
						this.style=0;
					}
				} else {
					this.active=1;
					if (this.style!=1){
						this.button.removeClass('buildingnonactive');
						this.button.addClass('buildingactive');
						//this.button.css({'-moz-opacity':'1','opacity':'1','filter':'alpha(opacity=100)','cursor':'pointer'});
						this.style=1;
					}
				}
			}else if (Game.buyBulk == 100){
				if(Game.prayers[7].selected==1){
						this.cost = this.cost*0.95;
					}
				this.cost = this.buyBulkCalc(100);
				if (this.cost > Game.drops_in_bank) {
					this.active=0;
					if (this.style!=0){
						//this.button.css({'-moz-opacity':'0.5','opacity':'.50','filter':'alpha(opacity=50)','cursor':'initial'});
						this.button.removeClass('buildingactive');
						this.button.addClass('buildingnonactive');
						this.style=0;
					}
		
				} else {
					this.active=1;
					if (this.style!=1){
						this.button.removeClass('buildingnonactive');
						this.button.addClass('buildingactive');
						//this.button.css({'-moz-opacity':'1','opacity':'1','filter':'alpha(opacity=100)','cursor':'pointer'});
						this.style=1;
					}
				}
			}
			
			
				
				if (Game.drops_in_bank>=(this.cost/10*9)){
				
					if (this.shown==0){
					
						if (Game.hasWebP==1){
							
							this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
							this.button.css({'background':'#C5CAE9 url("images/webp/'+ this.name +'.webp") no-repeat right center'});
							
						} else {
							
							this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
							this.button.css({'background':'#C5CAE9 url("images/png/'+ this.name +'.png") no-repeat right center'});
							
						}
						this.shown = 1;
					}
					this.shown = 1;
				}
			
			if(this.id>3){
				if (Game.buildings[this.id-3].shown==1){
					this.visible=1;
					this.button.show();
				}
			}
		},
		
		buyBulkCalc: function(num){
			var totcost = 0;
			for (var i = 0; i<num; i++){
				totcost += Math.ceil(this.basecost*Math.pow(this.increase,(this.quantity+i)));
				
			}
			return totcost;
		},
		
		changeButton: function(){
			if (Game.buyBulk == 1){
				this.cost = Math.ceil(this.basecost * Math.pow(this.increase,this.quantity));
				if(Game.prayers[7].selected==1){
					this.cost = (this.cost*0.95).toFixed(2);
				}
				if(this.shown==1){
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				} else {
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
				}
			} else if (Game.buyBulk == 10){
				this.cost = this.buyBulkCalc(10);
				if(Game.prayers[7].selected==1){
					this.cost = (this.cost*0.95).toFixed(2);
				}
				if (this.shown==1){
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>10x = "+Beautify(this.cost)+"</span>");
				}else{
					var cost10 = this.buyBulkCalc(10);
					if(Game.prayers[7].selected==1){
						cost10 = (cost10*0.95).toFixed(2);
					}
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>10x = "+Beautify(cost10)+"</span>");
				}
			} else if (Game.buyBulk == 100){
				this.cost = this.buyBulkCalc(100);
				if(Game.prayers[7].selected==1){
					this.cost = (this.cost*0.95).toFixed(2);
				}
				if (this.shown==1){
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>100x = "+Beautify(this.cost)+"</span>");
				}else{
					var cost100 = this.buyBulkCalc(100);
					if(Game.prayers[7].selected==1){
						cost100 = (cost10*0.95).toFixed(2);
					}
					this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>100x = "+Beautify(cost100)+"</span>");
				}
			}
			
		},
		
		buy: function() {
		
			if(this.active==1){
				var self = this;
				this.active=0;
				if(Game.buyBulk == 1){
					this.cost = Math.ceil(this.basecost * Math.pow(this.increase,this.quantity));
					if(Game.prayers[7].selected==1){
						this.cost = this.cost*0.95;
					}
					if(Game.drops_in_bank>=this.cost){
						Game.drops_in_bank -= this.cost; if(Game.drops_in_bank<0){Game.drops_in_bank=0;}
						
						this.quantity++;
						Game.totalBuildings++;
			
						this.cost = Math.ceil(this.basecost * Math.pow(this.increase,this.quantity));
						this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span>");
					}
				}else if (Game.buyBulk == 10){
					var cost10 = this.buyBulkCalc(10);
					if(Game.prayers[7].selected==1){
						cost10 = cost10*0.95;
					}
					if(Game.drops_in_bank>=cost10){
						Game.drops_in_bank -= cost10; if(Game.drops_in_bank<0){Game.drops_in_bank=0;}
						this.quantity = this.quantity+10;
						Game.totalBuildings = Game.totalBuildings + 10;
						this.cost = this.buyBulkCalc(10);
						if(Game.prayers[7].selected==1){
							this.cost = this.cost*0.95;
						}
						this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>10x = "+Beautify(this.cost)+"</span>");
					}
				} else if (Game.buyBulk == 100){
					var cost100 = this.buyBulkCalc(100);
					if(Game.prayers[7].selected==1){
						cost100 = cost100*0.95;
					}
					if(Game.drops_in_bank>=cost100){
						Game.drops_in_bank -= cost100; if(Game.drops_in_bank<0){Game.drops_in_bank=0;}
						this.quantity = this.quantity+100;
						Game.totalBuildings = Game.totalBuildings + 100;
						this.cost = this.buyBulkCalc(100);
						if(Game.prayers[7].selected==1){
							this.cost = this.cost*0.95;
						}
						this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>100x = "+Beautify(this.cost)+"</span>");
					}
				}
				
				Game.cps();
				
				
			}
			$('#popover').hide();
		},
		
		
		init: function() {
			var self = this;
			this.basecost = this.cost;
			if (Game.buyBulk == 1){
				
				if (Game.hasWebP==1){
						this.button = $("<button class='building'><span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span></button></br>").css({'background':'#C5CAE9 url("images/webp/question.webp") no-repeat right center'})
									.hover(function() {
										if(self.shown==1){
											$('#popover').html('<table><tr><td><img src="images/webp/'+self.name+'.webp"></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(self.cost)+' drops</p><p>Each '+self.name+' produces '+ Beautify((self.curproduction).toFixed(2)) +' drops per second.</p><p>'+self.quantity+' '+ self.name +'s producing '+ Beautify((self.quantity*self.curproduction).toFixed(2)) +' drops per second. ('+ ((self.quantity*self.curproduction)/Game.cps_cur*100).toFixed(2) +' % of total production)</p></td></tr></table>');
											var posX = tempX;
											var posY = tempY;
											var divh = $('#popover').outerHeight();
											var h = window.innerHeight;
											if((posY+divh)>h){
												posY = h-divh;
											}
											var popXpos = Game._getPopPos('left');
											
											var csspos = {'top':posY, 'left':popXpos[1], 'right':popXpos[0]};
											
											$('#popover').css(csspos).show();
										}
									  }, function() {
										// on mouseout
										$('#popover').hide();
									  })
									  
									.click(function() {
										self.buy();
									});
					
				}else{
					this.button = $("<button class='building'><span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Beautify(this.cost)+"</span></button></br>").css({'background':'#C5CAE9 url("images/png/question.png") no-repeat right center'})
		
									.hover(function() {
										if(self.shown==1){
											$('#popover').html('<table><tr><td><img src="images/png/'+self.name+'.png"></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(self.cost)+' drops</p><p>Each '+self.name+' produces '+ Beautify(self.curproduction.toFixed(2)) +' drops per second.</p><p>'+self.quantity+' '+ self.name +'s producing '+ Beautify((self.quantity*self.curproduction).toFixed(2)) +' drops per second. ('+ ((self.quantity*self.curproduction)/Game.cps_cur*100).toFixed(2) +' % of total production)</p></td></tr></table>');
											var posX = tempX;
											var posY = tempY;
											var divh = $('#popover').outerHeight();
											var h = window.innerHeight;
											if((posY+divh)>h){
												posY = h-divh;
											}
											var popXpos = Game._getPopPos('left');
											
											var csspos = {'top':posY, 'left':popXpos[1], 'right':popXpos[0]};
											
											$('#popover').css(csspos).show();
										}
									  }, function() {
										// on mouseout
										$('#popover').hide();
									  })
									  
									.click(function() {
										self.buy();
									});
				}
			}
			
			Game.store.append(this.button);
			if (this.id>3){
				this.button.hide();
			} else{
				this.visible = 1;
			}
			
			
			this.check();
			
			
			return this;
		}
	}, options);
};


var Upgrade = function(options) {
	return $.extend({
		
		bought: 0,   
		button: undefined, 
		buttonBought: undefined,
		active:0,
		hover:0,
		startcost: undefined,
		discounted:0,
		style:1,
		
		check: function() {
			if (this.bought==0){
				if (this.sort=="mouse"){
					if (this.required<=Game.handmade_drops){
						this.button.fadeIn("fast");
						}
					this.checkstyle();
				}
				else if (this.sort=="hand"){
					if (this.required <= Game.buildings[this.effect].quantity){
						this.button.fadeIn("fast");
						}
				this.checkstyle();
					
				}
				else if (this.sort=="building"){
					if (this.required <= Game.buildings[this.effect].quantity){
						this.button.fadeIn("fast");
					}
					this.checkstyle();
					
				}
				else if (this.sort=="multi"){
					if ((this.required <= Game.total_drops_produced)&&((this.cost*0.8)<=Game.drops_in_ocean)){
						this.button.fadeIn("fast");
						}
					this.checkstyle();
					
				}
				else if (this.sort=="cloud"){
					
					if ((this.required<=Game.cloudsclicked)&&((this.cost/100*90) <= Game.drops_in_bank)){
						this.button.fadeIn("fast");
					}
					this.checkstyle();
					
				}
				else if (this.sort=="knowhow"){
					if (Game.knowhow!=0){
						if (this.required==0){
							if (Game.total_drops_produced>=1000){
								this.button.fadeIn("fast");
							}
							this.checkstyle();
						} else if (this.required==1){
							if (Game.upgrades[168].bought==1){
								this.button.fadeIn("fast");
							}
							this.checkstyle();
							
						}else if (this.required==2){
							if ((Game.upgrades[168].bought==1)&&(Game.upgrades[169].bought==1)){
								this.button.fadeIn("fast");
								}
							this.checkstyle();
							
						}else if (this.required==3){
							if ((Game.upgrades[168].bought==1)&&(Game.upgrades[169].bought==1)&&(Game.upgrades[170].bought==1)){
								this.button.fadeIn("fast");
								}
							this.checkstyle();
						}
					
					}
				}
				else if(this.sort=="ocean"){
					if (this.required <= Game.oceanLog){
						this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="contact"){
					if (this.required <= Game.alientechNum){
						this.button.fadeIn("fast");
						}
					this.checkstyle();
					
				}else if(this.sort=="contactb"){
						this.checkstyle();
				}else if(this.sort=="aliens"){
								this.checkstyle();
					
				}else if(this.sort=="alientech"){
					
					if ((this.required <= Game.buildings[this.building-1].quantity)&&(Game.buildings[this.pip].quantity>=1)){
						this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="alientechb"){
					
					if ((this.required <= Game.buildings[this.building-1].quantity)&&(Game.buildings[this.pip].quantity>=1)){
						this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="crazyscientist"){
					
					if((this.required <= Game.achievementsUnlocked)&&((this.cost/100*90) <= Game.drops_in_bank)){
						this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="multiknowhow"){
					if ((Game.knowhowupgrades[this.required].bought==1)&&((this.cost/100*90)<=Game.drops_in_bank)&&((this.cost*0.8)<=Game.drops_in_ocean)){
							this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="collaboration"){
					
						if ((this.required <= Game.buildings[this.building-1].quantity)&&(this.required <= Game.buildings[this.pipnum-1].quantity)&&(Game.knowhowupgrades[this.other-1].bought==1)){
							this.button.fadeIn("fast");
						}
						this.checkstyle();
					
				}else if(this.sort=="poseidon"){
					
						if ( (Game.knowhowupgrades[this.required-1].bought==1) && ( (this.cost/100*90) <= Game.drops_in_bank ) ){
							this.button.fadeIn("fast");
						}
						this.checkstyle();
				}
				
			} 
		},
		
		startstyle: function(){
			if(this.cost <= Game.drops_in_bank){
					
					this.button.removeClass('upgradenonactive');
					this.button.addClass('upgradeactive');
					this.active=1;
					//this.button.css({'-moz-opacity':'1.0','opacity':'1.00','filter':'alpha(opacity=100)','cursor':'pointer'});
					this.style=1;
					
				
			} else{
					this.button.removeClass('upgradeactive');
					this.button.addClass('upgradenonactive');
					//this.button.css({'-moz-opacity':'0.7','opacity':'.70','filter':'alpha(opacity=70)','cursor':'initial'});
					this.active=0; 
					this.style=0;
				
			}
		},
		
		checkstyle: function(){
			if(this.cost <= Game.drops_in_bank){
				if(this.style!=1){ 
					this.button.removeClass('upgradenonactive');
					this.button.addClass('upgradeactive');
					this.active=1;
					//this.button.css({'-moz-opacity':'1.0','opacity':'1.00','filter':'alpha(opacity=100)','cursor':'pointer'});
					this.style=1;
				}	
			} else{
				if(this.style!=0){
					this.button.removeClass('upgradeactive');
					this.button.addClass('upgradenonactive');
					//this.button.css({'-moz-opacity':'0.7','opacity':'.70','filter':'alpha(opacity=70)','cursor':'initial'});
					this.active=0; 
					this.style=0;
				}
			}
		},
		
		buy: function() {
		
			if((this.active==1)&&(this.bought==0)&&(Game.drops_in_bank>=this.cost)){
				this.active=0;
				Game.totalupgrades++;
				Game.drops_in_bank -= this.cost; if(Game.drops_in_bank<0){Game.drops_in_bank=0;}
				this.bought=1;
				this.button.fadeOut("fast");
				this.buttonBought.fadeIn("fast");
				
				if (this.sort=="mouse"){
					Game.click_num_perc = Game.click_num_perc + this.perc;
					
				} else if (this.sort=="hand"){
					if (this.other==0){
						Game.click_num = Game.click_num * this.multiplier;
					}else {
						var buildingQuantity = Game.totalBuildings;
						Game.click_num = Game.click_num + (buildingQuantity*this.multiplier);

					}
					
				} else if (this.sort=="cloud"){
					if(this.other==3){
						Game.stormduration = Game.stormduration * 2;
						Game.clickStormduration = Game.clickStormduration * 2;
						Game.turboDuration = Game.turboDuration * 2;
						Game.wrathduration = Game.wrathduration * 2;
					}else{
						Game.cloudstart = Game.cloudstart/2;
						Game.cloudend =  Game.cloudend/2;
						Game.cloudduration = Game.cloudduration * 2;
					}
					
				} else if (this.sort == "knowhow"){
					Game.knowhowPerc += 20;
				} else if (this.sort == "aliens"){
					Game._startAliens();
				}else if (this.sort == "alientech"){
					Game.alientechNum++;
				}else if (this.sort == "contact"){
					Game.contactNum++;
					Game._startContact();
				}else if (this.sort == "contactb"){
					Game.contactNum++;
					Game._startContact();
				}else if (this.sort == "poseidon"){
					Game.poseidonImage.fadeIn(5000);
				}else if (this.sort == "crazyscientist"){
					Game.crazyscientistnum++;
				}
				
				Game.upgradesBought++;
				Game.boughtUpgradesTxt.text(Game.upgradesBought);
				Game.upgradesPerc = Math.floor((Game.upgradesBought/Game.upgrades.length)*100);
				Game.upgradesPercTxt.text(Game.upgradesPerc);
				
				Game.cps();
			}
			$('#popover').hide();
		},
		

		
		init: function() {
			var self = this;
			this.startcost = this.cost;
			
			if (this.sort=="ocean"){
				this.button = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >"+ this.filename+"</button>").css({'background-image':'url(images/oceanbg.png)'})
										.hover(function() {
											/*if (self.active==1){
												self.button.html(self.filename);
											}*/
											var posX = tempX;
											$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(\'images/oceanbg.png\');  "><table style="width:100%; height:100%;":><tr><td class="popoverperc">'+self.filename+'</td></tr></table></div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>');
											var posY = tempY;
											var divh = $('#popover').outerHeight();
											var h = window.innerHeight;
											if((posY+divh)>h){
												posY = h-divh;
											}
											var popXpos = Game._getPopPos('left');
											
											var csspos = {'top':posY, 'left':popXpos[1], 'right':popXpos[0]};
											$('#popover').css(csspos).show();
										}, function(){
											//self.button.html(self.filename);
											$('#popover').hide();
										}).click(function() {
											
											self.buy();
										});
				
				this.buttonBought = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' style='background-image:url(\'images/oceanbg.png\');'><div style='font-size:1em;  color:#221947;'>"+ this.filename+"</div></button>").css({'background-image':'url(images/oceanbg.png)'})
										.hover(function() {
											var posX = tempX;
											var posY = tempY;
											$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(\'images/oceanbg.png\'); "><table style="width:100%; height:100%;":><tr><td class="popoverperc">'+self.filename+'</td></tr></table></div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>').css({'top':posY-100, 'left':posX-460, 'right':'auto'}).show();
										}, function(){
											self.button.html("<div style='font-size:1em; color:#221947;'>"+ self.filename +"</div>");
											$('#popover').hide();
										});
			}else{
				if(Game.hasWebP==1){
					var pos = this.cx + "px " + this.cy + "px";
					var pos2 = (this.cx+2) + "px " + (this.cy-2) + "px";
					var filen = 'url(images/webp/' + this.filename + '.webp)';
					this.button = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' ><div style='font-size:1em;'>&nbsp;</div></button>").css({'background-image':filen, 'background-position':pos })
										.hover(function() {
											if (self.active==1){
												self.button.css({'background-position':pos2});
											}
											var posX = tempX;
											$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>');
											
											var posY = tempY;
											var divh = $('#popover').outerHeight();
											var h = window.innerHeight;
											if((posY+divh)>h){
												posY = h-divh;
											}
											var popXpos = Game._getPopPos('left');
											
											var csspos = {'top':posY, 'left':popXpos[1], 'right':popXpos[0]};
											$('#popover').css(csspos).show();
										  }, function() {
											// on mouseout
											self.button.css({'background-position':pos});
											$('#popover').hide();
										  })
										.click(function() {
											
											self.buy();
										});
								
						this.buttonBought = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' ><div style='font-size:1em;'>&nbsp;</div></button").css({'background-image':filen, 'background-position':pos })
										.hover(function() {
											
											var posX = tempX;
											var posY = tempY;
											$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>').css({'top':posY-100, 'left':posX-460, 'right':'auto'}).show();
										  }, function() {
											// on mouseout
											$('#popover').hide();
										  });
					
					
				}else{
					var pos = this.cx + "px " + this.cy + "px";	
					var pos2 = (this.cx+2) + "px " + (this.cy-2) + "px";
					var filen = 'url(images/png/' + this.filename + '.png)';
					this.button = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >&nbsp;</button>").css({'background-image':filen, 'background-position':pos })
									.hover(function() {
										if (self.active==1){
											self.button.css({'background-position':pos2});
										}
										var posX = tempX;
										$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>');
										
										var posY = tempY;
										var divh = $('#popover').outerHeight();
											var h = window.innerHeight;
											if((posY+divh)>h){
												posY = h-divh;
											}
										var popXpos = Game._getPopPos('left');
											
											var csspos = {'top':posY, 'left':popXpos[1], 'right':popXpos[0]};
										
										$('#popover').css(csspos).show();
									  }, function() {
										// on mouseout
										self.button.css({'background-position':pos});
										$('#popover').hide();
									  })
									.click(function() {
										
										self.buy();
									});
							
					this.buttonBought = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >&nbsp;</button>").css({'background-image':filen, 'background-position':pos })
									.hover(function() {
										
										var posX = tempX;
										var posY = tempY;
										$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>').css({ 'top':posY-100, 'left':posX-460, 'right':'auto'}).show();
									  }, function() {
										// on mouseout
										$('#popover').hide();
									  });
				}
			}
			
			//this.button.css({'-moz-opacity':'0.7','opacity':'.70','filter':'alpha(opacity=70)','cursor':'initial'});
			this.active=0;
			this.button.hide();
			
			
			Game.boughtUpgrades.append(this.buttonBought);
			this.buttonBought.hide();
			
			this.check();
			
			
			return this;
		}
	}, options);
};


var Achievement = function(options) {
	return $.extend({
		unlocked: 0,   
		button: undefined, 
		buttonLocked: undefined,
		
		check: function() {
			if (this.unlocked==0){
				if (this.sort=="drops"){
					if (this.required<=Game.total_drops_produced){
						this.unlock();
					}
				}
				else if (this.sort=="persecond"){
					if (this.required<=Game.cps_cur){
						this.unlock();
					}
				}
				else if (this.sort=="clicking"){
					if (this.required<=Game.handmade_drops){
						this.unlock();
					}
				}
				else if (this.sort=="helpinghand"){
					if (this.required<=Game.buildings[0].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="pipette"){
					if (this.required<=Game.buildings[1].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="airdryer"){
					if (this.required<=Game.buildings[2].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="bucket"){
					if (this.required<=Game.buildings[3].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="raindance"){
					if (this.required<=Game.buildings[4].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="faucet"){
					if (this.required<=Game.buildings[5].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="gardenhose"){
					if (this.required<=Game.buildings[6].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="truck"){
					if (this.required<=Game.buildings[7].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="firehose"){
					if (this.required<=Game.buildings[8].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="icemining"){
					if (this.required<=Game.buildings[9].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="spaceship"){
					if (this.required<=Game.buildings[10].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="wormhole"){
					if (this.required<=Game.buildings[11].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="river"){
					if (this.required<=Game.buildings[12].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="collider"){
					if (this.required<=Game.buildings[13].quantity){
						this.unlock();
					}
				}
				else if (this.sort=="totalbuildings"){
					if (this.required<=Game.totalBuildings){
						this.unlock();
					}
				}
				else if (this.sort=="buildingprod"){
					if (this.required<=Game.buildings[this.other].totalproduction){
						this.unlock();
					}
				}else if (this.sort=="totalupgrades"){
					if (this.required<=Game.totalupgrades){
						this.unlock();
					}
				}else if (this.sort=="totalcloudclicks"){
					if (this.required<=Game.cloudsclicked){
						this.unlock();
					}
				}
			}
		},
		
		unlock: function(){
			this.unlocked = 1;
			this.buttonLocked.hide();
			this.button.show();
			Game._makeNotice(this.filename, this.name, this.description, this.cx, this.cy,0);
			Game.achievementsUnlocked++;
			Game.unlockedAchievements.text(Game.achievementsUnlocked);
			Game.achievementsPerc = Math.floor((Game.achievementsUnlocked/Game.achievements.length)*100);
			Game.achievementsPercTxt.text(Game.achievementsPerc + "% Mtn Eew");
			Game.lemonade = Game.achievementsPerc * 4;
			Game._setMtnEewLvl(Game.achievementsPerc);
		},
		
		init: function() {
			var self = this;
			
			
				
			if (Game.hasWebP == 1){
				var pos = this.cx + "px " + (this.cy ) + "px";	
				var filen = 'url(images/webp/' + this.filename + '.webp)';
				this.button = $("<button class='upgrade' />").css({'background-color':'#221947', 'background-image':filen, 'background-position':pos}).hover(function() {
								
								var posX = tempX;
								var posY = tempY;
								
									$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>').css({'display':'block', 'top':posY-100, 'left':posX-460});
																
							  }, function() {
								// on mouseout
								$('#popover').css({'display':'none'});
							  });
							  
				this.buttonLocked = $("<button class='upgrade' />").css({'background-color':'#221947', 'background-image':'url(images/webp/question.webp)', 'background-position':'0px 0px'}).hover(function() {
									
									var posX = tempX;
									var posY = tempY;
									$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(images/webp/question.webp); background-position:5px 5px; background-repeat:no-repeat;">&nbsp;</div></td><td><p class="popovertitle">???</p><p>???</p></td></tr></table>').css({'display':'block', 'top':posY-100, 'left':posX-460});
								  }, function() {
									// on mouseout
									$('#popover').css({'display':'none'});
								  });
			}else{
				var pos = this.cx + "px " + this.cy + "px";	
				var filen = 'url(images/png/' + this.filename + '.png)';
				this.button = $("<button class='upgrade' />").css({'background-color':'#221947', 'background-image':filen, 'background-position':pos}).hover(function() {
								
								var posX = tempX;
								var posY = tempY;
								
									$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>').css({'display':'block', 'top':posY-100, 'left':posX-460});
								
								
							  }, function() {
								// on mouseout
								$('#popover').css({'display':'none'});
							  });
							  
				this.buttonLocked = $("<button class='upgrade' />").css({'background-color':'#221947', 'background-image':'url(images/png/question.png)', 'background-position':'0px 0px'}).hover(function() {
					
					var posX = tempX;
					var posY = tempY;
					$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(images/png/question.png); background-position:5px 5px; background-repeat:no-repeat;">&nbsp;</div></td><td><p class="popovertitle">???</p><p>???</p></td></tr></table>').css({'display':'block', 'top':posY-100, 'left':posX-460});
				  }, function() {
					// on mouseout
					$('#popover').css({'display':'none'});
				  });

			}
			
			Game.achievementsStore.append(this.button);

			this.button.fadeOut("fast");
			
			Game.achievementsStore.append(this.buttonLocked);

			this.buttonLocked.fadeIn("fast");
			this.check();
			
			return this;
		}
	}, options);
};


var Alien = function(options) {
	return $.extend({
		
		active:0,
		dropsDrained:0,
		clicks:0,
		timer: undefined,
		clickactive:0,
		moving:0,
		
		drainOffline: function(diff){
			if (this.active==1){
				
					var extradrain = (Game.alienDrainOffline)/100*Game.offlineperc/1000*diff;
					
					this.dropsDrained += extradrain;
					
					Game.totalDropsDrained += extradrain;
					
					return extradrain;
					
			} else {
				return 0;
			}
		},
		
		drain: function(diff){
			if (this.active==1){
					var aDrain = Game.alienDrain/1000*diff;
					this.dropsDrained += aDrain;
					Game.totalDropsDrained += aDrain;
					
			}
		},
		
		
		click: function(){
			var self = this;
			this.clicks++;
			setTimeout(function(){self.clicks=0;}, 1000);
			if((this.clicks==3)){
				if (this.clickactive==0){
					this.clickactive=1;
					
					this.moving=0;
					if (this.active==1){
						Game.alienNumber--;
						if (this.dropsDrained>0){
							Game.drops_in_bank += this.dropsDrained; if(Game.drops_in_bank<0){Game.drops_in_bank=0;}
							Game.total_drops_produced += this.dropsDrained;
							Game.total_ever += this.dropsDrained; 
							Game._makeNotice("alienSmall", "Alien popped", "You got " + Beautify(Math.floor(this.dropsDrained)) + " back from the alien.",0,0,0);
						}
						this.dropsDrained = 0;
					}
					this.active = 0;
					var starttxt = 'translate('+this.startpos+'px, -411px) rotate(0.0deg)'; 

					this.div.fadeOut("slow");
					this.div.removeClass(this.hover);
					if(Game.hasWebP == 1){
						this.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/webp/alien.webp)', 'transform': starttxt, 'transform-origin': '45px 222px' });
					}else{
						this.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/png/alien.png)', 'transform': starttxt, 'transform-origin': '45px 222px' });
					}

					Game.aliensPopList.push(this);
					this.clicks=0;
					clearTimeout(this.timer);
					setTimeout(function(){self.clickactive=0;},1000);
				}
			}
		},
		
		init: function() {
			var self = this;
			
			this.div = $("<div class='alien'></div>").click(function() {
									
									self.click();
								}).hover(function() {
									$('#popovera').html(Beautify(Math.floor(self.dropsDrained))+' drops');
									var w = $('#popovera').width();
									var posX = tempX-(w/2);
									var posY = tempY-30;
								
									$('#popovera').css({'display':'block', 'top':posY, 'left':posX});
									 this.timer = window.setInterval(function() {
										$('#popovera').html(Beautify(Math.floor(self.dropsDrained))+' drops');
									}, 250);
								
								}, function() {
									// on mouseout
									$('#popovera').css({'display':'none'});
									clearTimeout(this.timer);
								});
			this.div.css({'cursor':'pointer'});
			Game.alienContainer.append(this.div);
			return this;
		}		
				
	}, options);
};



var KnowhowUpgrade = function(options) {
	return $.extend({
		button: undefined, 
		active:0,
		shown:0,
		bought:0,
		
		check: function() {
			var self = this;
			var pos = this.cx + "px " + this.cy + "px";
			if (this.bought==0){
				
				var r1 = 0;
				var r2 = 0;
				if(this.req1!=0){
					var num = this.req1-1;
					r1 = Game.knowhowupgrades[num].bought; 
				}else {
					r1=1;
				}
				
				if(this.req2!=0){
					var num = this.req2-1;
					r2 = Game.knowhowupgrades[num].bought;
				}else {
					r2=1;
				}
				
				if((r1==1)&&(r2==1)){
					this.shown=1;
					if (Game.hasWebP==1){
						var filen = 'url("images/webp/'+this.filename+'.webp")';
						this.button.css({'-moz-opacity':'0.55', 'opacity':'.55', 'filter':'alpha(opacity=55)', 'background-position': pos, 'background-image':filen });
						this.changeopac(0.55, 55);
					}else {
						var filen = 'url("images/png/'+this.filename+'.png")';
						this.button.css({'-moz-opacity':'0.55', 'opacity':'.55', 'filter':'alpha(opacity=55)', 'background-image':filen, 'background-position': pos});
						this.changeopac(0.55, 55);
					}
				}
				
				if (this.shown==1){
					if (this.cost <= Game.oldExperiencePoints){
						this.active = 1;
						this.button.css({'-moz-opacity':'.8', 'opacity':'.8', 'filter':'alpha(opacity=80)','border-color':'#ffffff'});
						this.changeopac(0.8,80);
					}else {
						this.active = 0;
						this.button.css({'-moz-opacity':'0.55', 'opacity':'.55', 'filter':'alpha(opacity=55)'});
						this.changeopac(0.55, 55);
					}
				}
			}else {
				if (Game.hasWebP==1){
						var filen = 'url("images/webp/'+this.filename+'.webp")';
						this.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'background-position': pos, 'background-image':filen, 'border-color':'#00dd00' });
						this.changeopac(1, 100);
					}else {
						var filen = 'url("images/png/'+this.filename+'.png")';
						this.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'background-image':filen, 'background-position': pos, 'border-color':'#00dd00'});
						this.changeopac(1, 100);
					}
			}
				
		},
		
		
		changeopac: function(x,y){
			var ytxt = "alpha(opacity="+y+")";
			if(this.id>1){
				if(this.id==5){
					Game.arrowsArray[3][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[3][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if(this.id==20){
					Game.arrowsArray[18][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[18][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if (this.id==21){
					Game.arrowsArray[19][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[19][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if (this.id==40){
					Game.arrowsArray[38][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[38][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}
				else {
					Game.arrowsArray[this.id-2].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}
			}
		},
		
		buy: function() {
			if ((this.active==1)&&(this.bought==0)){
				
				Game.oldExperiencePoints -= this.cost;
				this.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
				
				if (this.sort=="unlock"){
					Game.useknowhow = 1;
				}
				else if (this.sort=="cloud"){
					if (this.id==8||this.id==9){
						Game.cloudstart = Game.cloudstart - (Game.cloudstart*0.05);
						Game.cloudend = Game.cloudend - (Game.cloudend*0.05);
					}
					else if(this.id==10||this.id==11){
						Game.stormduration = Game.stormduration*1.05;
						Game.clickStormduration = Game.clickStormduration*1.05;
						Game.turboDuration = Game.turboDuration * 1.05;
						Game.wrathduration = Game.wrathduration * 1.05;
					}
				}
				else if (this.sort=="alien"){	
					if (this.id==12){
						Game.contactDuration = Game.contactDuration/10;
					}
					else if (this.id==13){
						Game.newAlienBegin = Game.newAlienBegin/4;
						Game.newAlienEnd = Game.newAlienEnd/4;
					}
					else if (this.id==14||this.other==15){
						Game.alienDrainPerc += 1;
					}
				}
				else if(this.sort=="alientech"){
					Game.alientechStrength++;
				}
				else if(this.sort=="offline"){
					if(this.id==23){
						Game.offlineperc = 40;
						Game.offlinetime = 86400000;
					}else if(this.id==24){
						Game.offlinetime = 129600000;
					}else if(this.id==25){
						Game.offlineperc = 50;
					}else if(this.id==26){
						Game.offlinetime = 172800000;
					}else if(this.id==27){
						Game.offlineperc = 55;
					}else if(this.id==28){
						Game.offlinetime = 216000000;
					}else if(this.id==29){
						Game.offlineperc = 60;
					}else if(this.id==30){
						Game.offlinetime = 259200000;
					}else if(this.id==31){
						Game.offlineperc = 65;
					}else if(this.id==32){
						Game.offlinetime = 302400000;
					}else if(this.id==33){
						Game.offlineperc = 70;
					}else if(this.id==34){
						Game.offlinetime = 345600000;
					}else if(this.id==35){
						Game.offlineperc = 75;
					}else if(this.id==36){
						Game.offlinetime = 432000000;
					}else if(this.id==37){
						Game.offlineperc = 80;
					}else if(this.id==38){
						Game.offlinetime = 518400000;
					}else if(this.id==39){
						Game.offlineperc = 85;
					}else if(this.id==40){
						Game.offlineperc = 95;
						Game.offlinetime = 604800000;
					}
				}else if(this.sort=="weatherstation"){
					Game.weatherstationImage.show();
					Game.weatherstationLevel = 1;
				}
				this.bought = 1;
				
				Game._checkKnowhowScreen();
			}
			
		},
		

		init: function() {
			var self = this;
			
			if (Game.hasWebP==1){
				var pos = this.cx + "px " + this.cy + "px";
				var filen = 'url(images/webp/' + this.filename + '.webp)';
				this.button = $("<button class='knowhowupgradebutton'></button>").css({'background':'transparent url("images/webp/question.webp") no-repeat center center'})
								.hover(function() {
									if(self.shown==1){
										var posX = tempX;
										var posY = tempY-50;
										
										if (posX<(screen.width/2)){
											posX +=80;
										} else {
											posX -=480;
										}
										
										$('#popoverk').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' experience points</p><p>'+self.description+'</p></td></tr></table>').css({'top':posY, 'left':posX}).show();
										
									}
								  }, function() {
									// on mouseout
									
									$('#popoverk').hide();
								  })
								  
								.click(function() {
									self.buy();
								});
				
			}else{
				var pos = this.cx + "px " + this.cy + "px";
				var filen = 'url(images/png/' + this.filename + '.png)';
				this.button = $("<button class='knowhowupgradebutton'></button>").css({'background':'transparent url("images/png/question.png") no-repeat center center'})
								.hover(function() {
									if(self.shown==1){
										var posX = tempX;
										var posY = tempY-50;
										if (posX<(screen.width/2)){
											posX +=80;
										} else {
											posX -=480;
										}
										$('#popoverk').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' experience points</p><p>'+self.description+'</p></td></tr></table>').css({'top':posY, 'left':posX}).show();
										
									}
								  }, function() {
									// on mouseout
									
									$('#popoverk').hide();
								  })
								  
								.click(function() {
									self.buy();
								});
			}

			var apdiv = "#khupgrade" + this.id; 
			$(apdiv).append(this.button);
			
			
			

			this.check();
			
			return this;
		}
	}, options);
};

var Prayer = function(options) {
	return $.extend({
		button: undefined,
		unlocked: 0,
		selected: 0,
		border:0,
		
		check: function(){
			if((Game.sacrificeLevel-4)>=this.id){
				this.button.show();
			}else if (this.id==0){
				this.button.show();
			}
			if ((this.selected==1)&&(this.border!=1)){
				this.button.css({'border-color':'#00ff00'});
				this.border=1;
			}else if ((this.selected==0)&&(this.border!=0)){
				this.button.css({'border-color':'#ffffff'});
				this.border=0;
			}
		},
		
		select: function(){
			if(this.selected!=1){
				$.each(Game.prayers, function(i, prayer) {
							prayer.selected = 0;
						});
				this.selected = 1;
				Game._prayerSelected(this.id);
				Game.cps();
			}
		},
		
		init: function() {
			var self = this;
			
			if(Game.hasWebP==1){
				var pos = this.cx + "px " + this.cy + "px";
				var filen = 'url(images/webp/' + this.filename + '.webp)';
				this.button = $("<button class='prayer' id='" + this.name + "' title='" + this.name + "' ><div style='font-size:1em;'>&nbsp;</div></button>").css({'background-image':filen, 'background-position':pos })
								.hover(function(){
									var posX = tempX -200 + "px";
									var posY = tempY-150 +"px";
									
									var csspos = {'top':posY, 'left':posX };
									$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>').css(csspos).show();
								},function(){
									$('#popover').hide();
								}).click(function(){
									self.select();
								});
			}
			else {
				var pos = this.cx + "px " + this.cy + "px";
				var filen = 'url(images/png/' + this.filename + '.png)';
				this.button = $("<button class='prayer' id='" + this.name + "' title='" + this.name + "' ><div style='font-size:1em;'>&nbsp;</div></button>").css({'background-image':filen, 'background-position':pos })
								.hover(function(){
									var posX = tempX -200 + "px";
									var posY = tempY-150 +"px";
									
									var csspos = {'top':posY, 'left':posX };
									$('#popover').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>').css(csspos).show();
								},function(){
									$('#popover').hide();
								}).click(function(){
									self.select();
								});
			}
			
			this.button.hide();
			
			Game.prayerSelectDiv.append(this.button);
			
			this.check();
			return this;
		}
		
	}, options);
};

var _buildings = [
	{id: 1, name: "Helping hand", cost: 15, production: 0.1},
	{id: 2, name: "Pipette", cost: 100, production: 1},
	{id: 3, name: "Air dryer", cost: 1100, production: 10},
	{id: 4, name: "Bucket", cost: 12000, production: 50},
	{id: 5, name: "Raindance", cost: 130000, production: 250},
	{id: 6, name: "Faucet", cost: 1400000,	production: 1500},
	{id: 7, name: "Garden hose", cost: 20000000, production: 8000},
	{id: 8, name: "Truck", cost: 330000000, production: 50000},
	{id: 9, name: "Fire hose", cost: 5100000000, production: 250000},
	{id: 10, name: "Ice mine", cost: 75000000000, production: 1500000},
	{id: 11, name: "Spaceship", cost: 1000000000000, production: 10000000},
	{id: 12, name: "Wormhole", cost: 14000000000000, production: 65000000},
	{id: 13, name: "River", cost: 170000000000000, production: 450000000},
	{id: 14, name: "Large H-O collider", cost: 2100000000000000, production: 3000000000}
];

var _upgrades = [
	
	{id:1, sort: "mouse", name: "Paper Mouse", filename: "upgrades", cx:0 , cy:0, cost: 50000, required: 1000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:2, sort: "mouse", name: "Cotton Mouse", filename: "upgrades", cx:-60 , cy:0, cost: 5000000, required: 100000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:3, sort: "mouse", name: "Leather Mouse", filename: "upgrades", cx:-120 , cy:0, cost: 500000000, required: 10000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:4, sort: "mouse", name: "Wooden Mouse",  filename: "upgrades", cx:-180 , cy:0, cost: 50000000000, required: 1000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:5, sort: "mouse", name: "Iron Mouse", filename: "upgrades", cx:-240 , cy:0, cost: 5000000000000, required: 100000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:6, sort: "mouse", name: "Silver Mouse", filename: "upgrades", cx:-300 , cy:0, cost: 500000000000000, required: 10000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:7, sort: "mouse", name: "Golden Mouse", filename: "upgrades", cx:-360 , cy:0, cost: 50000000000000000, required: 1000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:8, sort: "mouse", name: "Diamond Mouse", filename: "upgrades", cx:-420 , cy:0, cost: 5000000000000000000, required: 100000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:9, sort: "mouse", name: "Platinum Mouse", filename: "upgrades", cx:-480 , cy:0, cost: 500000000000000000000, required: 10000000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},

	{id:10, sort: "hand", name: "Two Hands", filename: "upgrades", cx:0 , cy:-60, cost: 100, required: 1, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
	{id:11, sort: "hand", name: "Injury Prevention", filename: "upgrades", cx:-60 , cy:-60, cost: 500, required: 1, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
	{id:12, sort: "hand", name: "Clicking With All Fingers", filename: "upgrades", cx:-120 , cy:-60, cost: 10000, required: 10, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
	{id:13, sort: "hand", name: "A Lot Of Fingers", filename: "upgrades", cx:-180 , cy:-60, cost: 100000, required: 20, effecton: "Helping hand", effect: 0, multiplier: 0.1, perc: 0,  other: "all", description:"Each click and Helping Hand gain 0.1 drops per click or second for each building owned."},
	{id:14, sort: "hand", name: "Even More Fingers", filename: "upgrades", cx:-240 , cy:-60, cost: 10000000, required: 40, effecton: "Helping hand", effect: 0, multiplier: 0.5, perc: 0,  other: "all", description:"Each click and Helping Hand gain 0.5 drops per click or second for each building owned."},
	{id:15, sort: "hand", name: "Billions Of Fingers", filename: "upgrades", cx:-300 , cy:-60, cost: 100000000, required: 80, effecton: "Helping hand", effect: 0, multiplier: 5, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5 drops per click or second for each building owned."},
	{id:16, sort: "hand", name: "Trillions Of Fingers", filename: "upgrades", cx:-360 , cy:-60, cost: 1000000000, required: 120, effecton: "Helping hand", effect: 0, multiplier: 50, perc: 0,  other: "all", description:"Each click and Helping Hand gain 50 drops per click or second for each building owned."},
	{id:17, sort: "hand", name: "Quadrillions Of Fingers", filename: "upgrades", cx:-420 , cy:-60, cost: 10000000000, required: 160, effecton: "Helping hand", effect: 0, multiplier: 500, perc: 0,  other: "all", description:"Each click and Helping Hand gain 500 drops per click or second for each building owned."},
	{id:18, sort: "hand", name: "Where Do These Fingers Come From?", filename: "upgrades", cx:-480 , cy:-60, cost: 10000000000000, required: 200, effecton: "Helping hand", effect: 0, multiplier: 5000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000 drops per click or second for each building owned."},
	{id:19, sort: "hand", name: "The Fingers Just Keep Coming!", filename: "upgrades", cx:-480 , cy:-120, cost: 100000000000000, required: 240, effecton: "Helping hand", effect: 0, multiplier: 50000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 50,000 drops per click or second for each building owned."},
	{id:20, sort: "hand", name: "These Fingers Are Becoming A Plague!", filename: "upgrades", cx:-480 , cy:-180, cost: 1000000000000000, required: 280, effecton: "Helping hand", effect: 0, multiplier: 500000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 500,000 drops per click or second for each building owned."},
	{id:21, sort: "hand", name: "AARGH I'm Drowning In Fingers!", filename: "upgrades", cx:-480 , cy:-240, cost: 10000000000000000, required: 320, effecton: "Helping hand", effect: 0, multiplier: 5000000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000,000 drops per click or second for each building owned."},

	{id:22, sort: "building", name: "Bigger Pipette", filename: "upgrades", cx:0 , cy:-120, cost:1000, required: 1, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:23, sort: "building", name: "Longer Pipette", filename: "upgrades", cx:-60 , cy:-120, cost:5000, required: 5, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:24, sort: "building", name: "Faster Pipette", filename: "upgrades", cx:-120 , cy:-120, cost:50000, required: 25, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:25, sort: "building", name: "Better Pipette", filename: "upgrades", cx:-180 , cy:-120, cost:5000000, required: 50, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:26, sort: "building", name: "Stronger Pipette", filename: "upgrades", cx:-240 , cy:-120, cost:500000000, required: 100, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:27, sort: "building", name: "Larger Pipette", filename: "upgrades", cx:-300 , cy:-120, cost:50000000000, required: 150, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:28, sort: "building", name: "Giant Pipette", filename: "upgrades", cx:-360 , cy:-120, cost:50000000000000, required: 200, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:29, sort: "building", name: "Atomic Pipette", filename: "upgrades", cx:-420 , cy:-120, cost:50000000000000000, required: 250, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:30, sort: "building", name: "Bigger Air Dryer", filename: "upgrades", cx:0 , cy:-180, cost:11000, required: 1, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:31, sort: "building", name: "Longer Air Dryer", filename: "upgrades", cx:-60 , cy:-180, cost:55000, required: 5, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:32, sort: "building", name: "Faster Air Dryer", filename: "upgrades", cx:-120 , cy:-180, cost:550000, required: 25, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:33, sort: "building", name: "Better Air Dryer", filename: "upgrades", cx:-180 , cy:-180, cost:55000000, required: 50, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:34, sort: "building", name: "Stronger Air Dryer", filename: "upgrades", cx:-240 , cy:-180, cost:5500000000, required: 100, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:35, sort: "building", name: "Larger Air Dryer", filename: "upgrades", cx:-300 , cy:-180, cost:550000000000, required: 150, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:36, sort: "building", name: "Giant Air Dryer", filename: "upgrades", cx:-360 , cy:-180, cost:550000000000000, required: 200, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:37, sort: "building", name: "Atomic Air Dryer", filename: "upgrades", cx:-420 , cy:-180, cost:550000000000000000, required: 250, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:38, sort: "building", name: "Bigger Bucket", filename: "upgrades", cx:0 , cy:-240, cost:120000, required: 1, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:39, sort: "building", name: "Longer Bucket", filename: "upgrades", cx:-60 , cy:-240, cost:600000, required: 5, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:40, sort: "building", name: "Faster Bucket", filename: "upgrades", cx:-120 , cy:-240, cost:6000000, required: 25, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:41, sort: "building", name: "Better Bucket", filename: "upgrades", cx:-180 , cy:-240, cost:600000000, required: 50, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:42, sort: "building", name: "Stronger Bucket", filename: "upgrades", cx:-240 , cy:-240, cost:60000000000, required: 100, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:43, sort: "building", name: "Larger Bucket", filename: "upgrades", cx:-300 , cy:-240, cost:6000000000000, required: 150, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:44, sort: "building", name: "Giant Bucket", filename: "upgrades", cx:-360 , cy:-240, cost:6000000000000000, required: 200, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:45, sort: "building", name: "Atomic Bucket", filename: "upgrades", cx:-420 , cy:-240, cost:6000000000000000000, required: 250, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:46, sort: "building", name: "Bigger Raindance", filename: "upgrades", cx:0 , cy:-300, cost:1300000, required: 1, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:47, sort: "building", name: "Longer Raindance", filename: "upgrades", cx:-60 , cy:-300, cost:6500000, required: 5, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:48, sort: "building", name: "Faster Raindance", filename: "upgrades", cx:-120 , cy:-300, cost:65000000, required: 25, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:49, sort: "building", name: "Better Raindance", filename: "upgrades", cx:-180 , cy:-300, cost:6500000000, required: 50, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:50, sort: "building", name: "Stronger Raindance", filename: "upgrades", cx:-240 , cy:-300, cost:650000000000, required: 100, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:51, sort: "building", name: "Larger Raindance", filename: "upgrades", cx:-300 , cy:-300, cost:65000000000000, required: 150, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:52, sort: "building", name: "Giant Raindance", filename: "upgrades", cx:-360 , cy:-300, cost:65000000000000000, required: 200, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:53, sort: "building", name: "Atomic Raindance", filename: "upgrades", cx:-420 , cy:-300, cost:65000000000000000000, required: 250, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:54, sort: "building", name: "Bigger Faucet", filename: "upgrades", cx:0 , cy:-360, cost:14000000, required: 1, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:55, sort: "building", name: "Longer Faucet", filename: "upgrades", cx:-60 , cy:-360, cost:70000000, required: 5, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:56, sort: "building", name: "Faster Faucet", filename: "upgrades", cx:-120 , cy:-360, cost:700000000, required: 25, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:57, sort: "building", name: "Better Faucet", filename: "upgrades", cx:-180 , cy:-360, cost:70000000000, required: 50, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:58, sort: "building", name: "Stronger Faucet", filename: "upgrades", cx:-240 , cy:-360, cost:7000000000000, required: 100, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:59, sort: "building", name: "Larger Faucet", filename: "upgrades", cx:-300 , cy:-360, cost:700000000000000, required: 150, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:60, sort: "building", name: "Giant Faucet", filename: "upgrades", cx:-360 , cy:-360, cost:700000000000000000, required: 200, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:61, sort: "building", name: "Atomic Faucet", filename: "upgrades", cx:-420 , cy:-360, cost:700000000000000000000, required: 250, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:62, sort: "building", name: "Bigger Garden Hose", filename: "upgrades", cx:0 , cy:-420, cost:200000000, required: 1, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:63, sort: "building", name: "Longer Garden Hose", filename: "upgrades", cx:-60 , cy:-420, cost:1000000000, required: 5, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:64, sort: "building", name: "Faster Garden Hose", filename: "upgrades", cx:-120 , cy:-420, cost:10000000000, required: 25, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:65, sort: "building", name: "Better Garden Hose", filename: "upgrades", cx:-180 , cy:-420, cost:1000000000000, required: 50, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:66, sort: "building", name: "Stronger Garden Hose", filename: "upgrades", cx:-240 , cy:-420, cost:100000000000000, required: 100, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:67, sort: "building", name: "Larger Garden Hose", filename: "upgrades", cx:-300 , cy:-420, cost:10000000000000000, required: 150, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:68, sort: "building", name: "Giant Garden Hose", filename: "upgrades", cx:-360 , cy:-420, cost:10000000000000000000, required: 200, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:69, sort: "building", name: "Atomic Garden Hose", filename: "upgrades", cx:-420 , cy:-420, cost:10000000000000000000000, required: 250, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:70, sort: "building", name: "Bigger Truck", filename: "upgrades", cx:0 , cy:-480, cost:3300000000, required: 1, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:71, sort: "building", name: "Longer Truck", filename: "upgrades", cx:-60 , cy:-480, cost:16500000000, required: 5, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:72, sort: "building", name: "Faster Truck", filename: "upgrades", cx:-120 , cy:-480, cost:165000000000, required: 25, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:73, sort: "building", name: "Better Truck", filename: "upgrades", cx:-180 , cy:-480, cost:16500000000000, required: 50, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:74, sort: "building", name: "Stronger Truck", filename: "upgrades", cx:-240 , cy:-480, cost:1650000000000000, required: 100, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:75, sort: "building", name: "Larger Truck", filename: "upgrades", cx:-300 , cy:-480, cost:165000000000000000, required: 150, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:76, sort: "building", name: "Giant Truck", filename: "upgrades", cx:-360 , cy:-480, cost:165000000000000000000, required: 200, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:77, sort: "building", name: "Atomic Truck", filename: "upgrades", cx:-420 , cy:-480, cost:165000000000000000000000, required: 250, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:78, sort: "building", name: "Bigger Fire Hose", filename: "upgrades", cx:0 , cy:-540, cost:51000000000, required: 1, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:79, sort: "building", name: "Longer Fire Hose", filename: "upgrades", cx:-60 , cy:-540, cost:255000000000, required: 5, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:80, sort: "building", name: "Faster Fire Hose", filename: "upgrades", cx:-120 , cy:-540, cost:2550000000000, required: 25, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:81, sort: "building", name: "Better Fire Hose", filename: "upgrades", cx:-180 , cy:-540, cost:255000000000000, required: 50, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:82, sort: "building", name: "Stronger Fire Hose", filename: "upgrades", cx:-240 , cy:-540, cost:25500000000000000, required: 100, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:83, sort: "building", name: "Larger Fire Hose", filename: "upgrades", cx:-300 , cy:-540, cost:2550000000000000000, required: 150, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:84, sort: "building", name: "Giant Fire Hose", filename: "upgrades", cx:-360 , cy:-540, cost:2550000000000000000000, required: 200, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:85, sort: "building", name: "Atomic Fire Hose", filename: "upgrades", cx:-420 , cy:-540, cost:2550000000000000000000000, required: 250, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:86, sort: "building", name: "Bigger Mine", filename: "upgrades", cx:0 , cy:-600, cost:750000000000, required: 1, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:87, sort: "building", name: "Longer Mine", filename: "upgrades", cx:-60 , cy:-600, cost:3750000000000, required: 5, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:88, sort: "building", name: "Faster Mine", filename: "upgrades", cx:-120 , cy:-600, cost:37500000000000, required: 25, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:89, sort: "building", name: "Better Mine", filename: "upgrades", cx:-180 , cy:-600, cost:3750000000000000, required: 50, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:90, sort: "building", name: "Stronger Mine", filename: "upgrades", cx:-240 , cy:-600, cost:375000000000000000, required: 100, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:91, sort: "building", name: "Larger Mine", filename: "upgrades", cx:-300 , cy:-600, cost:37500000000000000000, required: 150, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:92, sort: "building", name: "Giant Mine", filename: "upgrades", cx:-360 , cy:-600, cost:37500000000000000000000, required: 200, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:93, sort: "building", name: "Atomic Mine", filename: "upgrades", cx:-420 , cy:-600, cost:37500000000000000000000000, required: 250, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:94, sort: "building", name: "Bigger Spaceship", filename: "upgrades", cx:0 , cy:-660, cost:10000000000000, required: 1, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:95, sort: "building", name: "Longer Spaceship", filename: "upgrades", cx:-60 , cy:-660, cost:50000000000000, required: 5, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:96, sort: "building", name: "Faster Spaceship", filename: "upgrades", cx:-120 , cy:-660, cost:500000000000000, required: 25, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:97, sort: "building", name: "Better Spaceship", filename: "upgrades", cx:-180 , cy:-660, cost:50000000000000000, required: 50, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:98, sort: "building", name: "Stronger Spaceship", filename: "upgrades", cx:-240 , cy:-660, cost:5000000000000000000, required: 100, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:99, sort: "building", name: "Larger Spaceship", filename: "upgrades", cx:-300 , cy:-660, cost:500000000000000000000, required: 150, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:100, sort: "building", name: "Giant Spaceship", filename: "upgrades", cx:-360 , cy:-660, cost:500000000000000000000000, required: 200, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:101, sort: "building", name: "Atomic Spaceship", filename: "upgrades", cx:-420 , cy:-660, cost:500000000000000000000000000, required: 250, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:102, sort: "building", name: "Bigger Wormhole", filename: "upgrades", cx:0 , cy:-720, cost:140000000000000, required: 1, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:103, sort: "building", name: "Longer Wormhole", filename: "upgrades", cx:-60 , cy:-720, cost:700000000000000, required: 5, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:104, sort: "building", name: "Faster Wormhole", filename: "upgrades", cx:-120 , cy:-720, cost:7000000000000000, required: 25, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:105, sort: "building", name: "Better Wormhole", filename: "upgrades", cx:-180 , cy:-720, cost:700000000000000000, required: 50, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:106, sort: "building", name: "Stronger Wormhole", filename: "upgrades", cx:-240 , cy:-720, cost:70000000000000000000, required: 100, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:107, sort: "building", name: "Larger Wormhole", filename: "upgrades", cx:-300 , cy:-720, cost:7000000000000000000000, required: 150, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:108, sort: "building", name: "Giant Wormhole", filename: "upgrades", cx:-360 , cy:-720, cost:7000000000000000000000000, required: 200, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:109, sort: "building", name: "Atomic Wormhole", filename: "upgrades", cx:-420 , cy:-720, cost:7000000000000000000000000000, required: 250, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:110, sort: "building", name: "Bigger River", filename: "upgrades", cx:0 , cy:-780, cost:1700000000000000, required: 1, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:111, sort: "building", name: "Longer River", filename: "upgrades", cx:-60 , cy:-780, cost:8500000000000000, required: 5, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:112, sort: "building", name: "Faster River", filename: "upgrades", cx:-120 , cy:-780, cost:85000000000000000, required: 25, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:113, sort: "building", name: "Better River", filename: "upgrades", cx:-180 , cy:-780, cost:8500000000000000000, required: 50, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:114, sort: "building", name: "Stronger River", filename: "upgrades", cx:-240 , cy:-780, cost:850000000000000000000, required: 100, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:115, sort: "building", name: "Larger River", filename: "upgrades", cx:-300 , cy:-780, cost:85000000000000000000000, required: 150, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:116, sort: "building", name: "Giant River", filename: "upgrades", cx:-360 , cy:-780, cost:85000000000000000000000000, required: 200, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:117, sort: "building", name: "Atomic River", filename: "upgrades", cx:-420 , cy:-780, cost:85000000000000000000000000000, required: 250, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:118, sort: "building", name: "Bigger Collider", filename: "upgrades", cx:0 , cy:-840, cost:21000000000000000, required: 1, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:119, sort: "building", name: "Longer Collider", filename: "upgrades", cx:-60 , cy:-840, cost:105000000000000000, required: 5, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:120, sort: "building", name: "Faster Collider", filename: "upgrades", cx:-120 , cy:-840, cost:1050000000000000000, required: 25, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:121, sort: "building", name: "Better Collider", filename: "upgrades", cx:-180 , cy:-840, cost:105000000000000000000, required: 50, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:122, sort: "building", name: "Stronger Collider", filename: "upgrades", cx:-240 , cy:-840, cost:10500000000000000000000, required: 100, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:123, sort: "building", name: "Larger Collider", filename: "upgrades", cx:-300 , cy:-840, cost:1050000000000000000000000, required: 150, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:124, sort: "building", name: "Giant Collider", filename: "upgrades", cx:-360 , cy:-840, cost:1050000000000000000000000000, required: 200, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:125, sort: "building", name: "Atomic Collider", filename: "upgrades", cx:-420 , cy:-840, cost:1050000000000000000000000000000, required: 250, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},

	{id:126, sort: "multi", name: "First Life!", filename: "upgrades", cx:0 , cy:-900, cost: 1000000, required: 50000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:127, sort: "multi", name: "First Cell", filename: "upgrades", cx:-60 , cy:-900, cost: 5000000, required: 250000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:128, sort: "multi", name: "Bacteria", filename: "upgrades", cx:-120 , cy:-900, cost: 10000000, required: 500000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:129, sort: "multi", name: "Archaea", filename: "upgrades", cx:-180 , cy:-900, cost: 50000000, required: 2500000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:130, sort: "multi", name: "Protozoa", filename: "upgrades", cx:-240 , cy:-900, cost: 100000000, required: 5000000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:131, sort: "multi", name: "Amoebe", filename: "upgrades", cx:-300 , cy:-900, cost: 500000000, required: 25000000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:132, sort: "multi", name: "Algae", filename: "upgrades", cx:-360 , cy:-900, cost: 1000000000, required: 50000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:133, sort: "multi", name: "Fungi", filename: "upgrades", cx:-420 , cy:-900, cost: 5000000000, required: 250000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:134, sort: "multi", name: "Flagellated Cells", filename: "upgrades", cx:-480 , cy:-900, cost: 10000000000, required: 500000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:135, sort: "multi", name: "First Multicellular Life!", filename: "upgrades", cx:0 , cy:-960, cost: 50000000000, required: 2500000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},	
	{id:136, sort: "multi", name: "Plankton", filename: "upgrades", cx:-60 , cy:-960, cost: 100000000000, required: 5000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:137, sort: "multi", name: "Black Sea Rod Coral", filename: "upgrades", cx:-120 , cy:-960, cost: 100000000000, required: 5000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:138, sort: "multi", name: "Sea Plume Coral", filename: "upgrades", cx:-180 , cy:-960, cost: 500000000000, required: 25000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:139, sort: "multi", name: "Sea Fan Coral", filename: "upgrades", cx:-240 , cy:-960, cost: 1000000000000, required: 50000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:140, sort: "multi", name: "Ivory Bush Coral", filename: "upgrades", cx:-300 , cy:-960, cost: 5000000000000, required: 250000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:141, sort: "multi", name: "Grooved Brain Coral", filename: "upgrades", cx:-360 , cy:-960, cost: 10000000000000, required: 500000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:142, sort: "multi", name: "Pillar Coral", filename: "upgrades", cx:-420 , cy:-960, cost: 50000000000000, required: 2500000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:143, sort: "multi", name: "Thick Finger Coral", filename: "upgrades", cx:-480 , cy:-960, cost: 500000000000000, required: 25000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:144, sort: "multi", name: "Wire Coral", filename: "upgrades", cx:0 , cy:-1020, cost: 500000000000000, required: 25000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:145, sort: "multi", name: "Blade Fire Coral", filename: "upgrades", cx:-60 , cy:-1020, cost: 1000000000000000, required: 50000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:146, sort: "multi", name: "Boulder Star Coral", filename: "upgrades", cx:-120 , cy:-1020, cost: 1000000000000000, required: 50000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:147, sort: "multi", name: "Jewel Anemone", filename: "upgrades", cx:-180 , cy:-1020, cost: 10000000000000000, required: 500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:148, sort: "multi", name: "Condy Anemone", filename: "upgrades", cx:-240 , cy:-1020, cost: 10000000000000000, required: 500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:149, sort: "multi", name: "Sand-rose Anemone", filename: "upgrades", cx:-300 , cy:-1020, cost: 50000000000000000, required: 2500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:150, sort: "multi", name: "White Anemone", filename: "upgrades", cx:-360 , cy:-1020, cost: 50000000000000000, required: 2500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:151, sort: "multi", name: "Striped Colonial Anemone", filename: "upgrades", cx:-420 , cy:-1020, cost: 100000000000000000, required: 5000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:152, sort: "multi", name: "Christmas Tree Worm", filename: "upgrades", cx:-480 , cy:-1020, cost: 500000000000000000, required: 25000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:153, sort: "multi", name: "Orange Fire Worm", filename: "upgrades", cx:0 , cy:-1080, cost: 1000000000000000000, required: 50000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:154, sort: "multi", name: "Peanut Worm", filename: "upgrades", cx:-60 , cy:-1080, cost: 5000000000000000000, required: 250000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:155, sort: "multi", name: "Flat Worm", filename: "upgrades", cx:-120 , cy:-1080, cost: 10000000000000000000, required: 500000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:156, sort: "multi", name: "Spaghetti Worm", filename: "upgrades", cx:-180 , cy:-1080, cost: 50000000000000000000, required: 2500000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:157, sort: "multi", name: "Many Ribbed Jellyfish", filename: "upgrades", cx:-240 , cy:-1080, cost: 100000000000000000000, required: 5000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:158, sort: "multi", name: "Moon Jellyfish", filename: "upgrades", cx:-300 , cy:-1080, cost: 500000000000000000000, required: 25000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:159, sort: "multi", name: "Compass Jellyfish", filename: "upgrades", cx:-360 , cy:-1080, cost: 1000000000000000000000, required: 50000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:160, sort: "multi", name: "Mauve Stinger Jellyfish", filename: "upgrades", cx:-420 , cy:-1080, cost: 5000000000000000000000, required: 250000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:161, sort: "multi", name: "Barrel Jellyfish", filename: "upgrades", cx:-480 , cy:-1080, cost: 10000000000000000000000, required: 500000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:162, sort: "multi", name: "Common Starfish", filename: "upgrades", cx:0 , cy:-1140, cost: 50000000000000000000000, required: 2500000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:163, sort: "multi", name: "Red Knobbed Starfish", filename: "upgrades", cx:-60 , cy:-1140, cost: 100000000000000000000000, required: 5000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:164, sort: "multi", name: "Magnificent Starfish", filename: "upgrades", cx:-120 , cy:-1140, cost: 500000000000000000000000, required: 25000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:165, sort: "multi", name: "Royal Starfish", filename: "upgrades", cx:-180 , cy:-1140, cost: 1000000000000000000000000, required: 50000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	
	{id:166, sort:"cloud", name:"Rainy day", filename: "upgrades", cx:-480 , cy:-300, cost: 777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 1, description:"Clouds show up twice as often and stay twice as long."},
	{id:167, sort:"cloud", name:"A lot of rain expected", filename: "upgrades", cx:-480 , cy:-300, cost: 77777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 2, description:"Clouds show up twice as often and stay twice as long."},
	{id:168, sort:"cloud", name:"Worst weather ever", filename: "upgrades", cx:-480 , cy:-300, cost: 77777777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 3, description:"Cloud effects last twice as long."},

	{id:169, sort:"knowhow", name:"Use Your Know-how", filename: "upgrades", cx:-480 , cy:-360, cost: 1000, required: 0, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 40% in total"},
	{id:170, sort:"knowhow", name:"Get better with know-how", filename: "upgrades", cx:-480 , cy:-420, cost: 100000, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 60% in total"},
	{id:171, sort:"knowhow", name:"Expert at using know-how", filename: "upgrades", cx:-480 , cy:-480, cost: 10000000, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 80% in total"},
	{id:172, sort:"knowhow", name:"Use your know-how perfectly", filename: "upgrades", cx:-480 , cy:-540, cost: 1000000000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 100% in total"},
	
	{id:173, sort: "ocean", name: "1st milestone reached", filename: "1", cost: 100000, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:174, sort: "ocean", name: "2nd milestone reached", filename: "2", cost: 300000, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:175, sort: "ocean", name: "3th milestone reached", filename: "3", cost: 500000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:176, sort: "ocean", name: "4th milestone reached", filename: "4", cost: 700000, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:177, sort: "ocean", name: "5th milestone reached", filename: "5", cost: 900000, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:178, sort: "ocean", name: "6th milestone reached", filename: "6", cost: 1000000, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:179, sort: "ocean", name: "7th milestone reached", filename: "7", cost: 3000000, required: 7, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:180, sort: "ocean", name: "8th milestone reached", filename: "8", cost: 5000000, required: 8, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:181, sort: "ocean", name: "9th milestone reached", filename: "9", cost: 7000000, required: 9, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:182, sort: "ocean", name: "10th milestone reached", filename: "10", cost: 9000000, required: 10, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:183, sort: "ocean", name: "11th milestone reached", filename: "11", cost: 10000000, required: 11, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:184, sort: "ocean", name: "12th milestone reached", filename: "12", cost: 30000000, required: 12, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:185, sort: "ocean", name: "13th milestone reached", filename: "13", cost: 50000000, required: 13, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:186, sort: "ocean", name: "14th milestone reached", filename: "14", cost: 70000000, required: 14, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:187, sort: "ocean", name: "15th milestone reached", filename: "15", cost: 90000000, required: 15, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:188, sort: "ocean", name: "16th milestone reached", filename: "16", cost: 100000000, required: 16, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:189, sort: "ocean", name: "17th milestone reached", filename: "17", cost: 300000000, required: 17, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:190, sort: "ocean", name: "18th milestone reached", filename: "18", cost: 500000000, required: 18, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:191, sort: "ocean", name: "19th milestone reached", filename: "19", cost: 700000000, required: 19, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:192, sort: "ocean", name: "20th milestone reached", filename: "20", cost: 900000000, required: 20, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:193, sort: "ocean", name: "21st milestone reached", filename: "21", cost: 1000000000, required: 21, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:194, sort: "ocean", name: "22nd milestone reached", filename: "22", cost: 3000000000, required: 22, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:195, sort: "ocean", name: "23th milestone reached", filename: "23", cost: 5000000000, required: 23, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:196, sort: "ocean", name: "24th milestone reached", filename: "24", cost: 7000000000, required: 24, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:197, sort: "ocean", name: "25th milestone reached", filename: "25", cost: 9000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:198, sort: "ocean", name: "26th milestone reached", filename: "26", cost: 10000000000, required: 26, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:199, sort: "ocean", name: "27th milestone reached", filename: "27", cost: 30000000000, required: 27, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
//forgot an id
	{id:201, sort: "ocean", name: "28th milestone reached", filename: "28", cost: 50000000000, required: 28, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:202, sort: "ocean", name: "29th milestone reached", filename: "29", cost: 70000000000, required: 29, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:203, sort: "ocean", name: "30th milestone reached", filename: "30", cost: 90000000000, required: 30, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:204, sort: "ocean", name: "31st milestone reached", filename: "31", cost: 100000000000, required: 31, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:205, sort: "ocean", name: "32nd milestone reached", filename: "32", cost: 300000000000, required: 32, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:206, sort: "ocean", name: "33th milestone reached", filename: "33", cost: 500000000000, required: 33, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:207, sort: "ocean", name: "34th milestone reached", filename: "34", cost: 700000000000, required: 34, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:208, sort: "ocean", name: "35th milestone reached", filename: "35", cost: 900000000000, required: 35, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:209, sort: "ocean", name: "36th milestone reached", filename: "36", cost: 1000000000000, required: 36, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:210, sort: "ocean", name: "37th milestone reached", filename: "37", cost: 3000000000000, required: 37, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:211, sort: "ocean", name: "38th milestone reached", filename: "38", cost: 5000000000000, required: 38, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:212, sort: "ocean", name: "39th milestone reached", filename: "39", cost: 7000000000000, required: 39, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:213, sort: "ocean", name: "40th milestone reached", filename: "40", cost: 9000000000000, required: 40, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:214, sort: "ocean", name: "41st milestone reached", filename: "41", cost: 10000000000000, required: 41, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:215, sort: "ocean", name: "42nd milestone reached", filename: "42", cost: 30000000000000, required: 42, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:216, sort: "ocean", name: "43th milestone reached", filename: "43", cost: 50000000000000, required: 43, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:217, sort: "ocean", name: "44th milestone reached", filename: "44", cost: 70000000000000, required: 44, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:218, sort: "ocean", name: "45th milestone reached", filename: "45", cost: 90000000000000, required: 45, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:219, sort: "ocean", name: "46th milestone reached", filename: "46", cost: 100000000000000, required: 46, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:220, sort: "ocean", name: "47th milestone reached", filename: "47", cost: 300000000000000, required: 47, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:221, sort: "ocean", name: "48th milestone reached", filename: "48", cost: 500000000000000, required: 48, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:222, sort: "ocean", name: "49th milestone reached", filename: "49", cost: 700000000000000, required: 49, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:223, sort: "ocean", name: "50th milestone reached", filename: "50", cost: 900000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:224, sort: "ocean", name: "51st milestone reached", filename: "51", cost: 1000000000000000, required: 51, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:225, sort: "ocean", name: "52nd milestone reached", filename: "52", cost: 3000000000000000, required: 52, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:226, sort: "ocean", name: "53th milestone reached", filename: "53", cost: 5000000000000000, required: 53, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:227, sort: "ocean", name: "54th milestone reached", filename: "54", cost: 7000000000000000, required: 54, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:228, sort: "ocean", name: "55th milestone reached", filename: "55", cost: 9000000000000000, required: 55, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:229, sort: "ocean", name: "56th milestone reached", filename: "56", cost: 10000000000000000, required: 56, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:230, sort: "ocean", name: "57th milestone reached", filename: "57", cost: 30000000000000000, required: 57, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:231, sort: "ocean", name: "58th milestone reached", filename: "58", cost: 50000000000000000, required: 58, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:232, sort: "ocean", name: "59th milestone reached", filename: "59", cost: 70000000000000000, required: 59, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:233, sort: "ocean", name: "60th milestone reached", filename: "60", cost: 90000000000000000, required: 60, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:234, sort: "ocean", name: "61st milestone reached", filename: "61", cost: 100000000000000000, required: 61, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:235, sort: "ocean", name: "62nd milestone reached", filename: "62", cost: 300000000000000000, required: 62, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:236, sort: "ocean", name: "63th milestone reached", filename: "63", cost: 500000000000000000, required: 63, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:237, sort: "ocean", name: "64th milestone reached", filename: "64", cost: 700000000000000000, required: 64, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:238, sort: "ocean", name: "65th milestone reached", filename: "65", cost: 900000000000000000, required: 65, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:239, sort: "ocean", name: "66th milestone reached", filename: "66", cost: 1000000000000000000, required: 66, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:240, sort: "ocean", name: "67th milestone reached", filename: "67", cost: 3000000000000000000, required: 67, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:241, sort: "ocean", name: "68th milestone reached", filename: "68", cost: 5000000000000000000, required: 68, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:242, sort: "ocean", name: "69th milestone reached", filename: "69", cost: 7000000000000000000, required: 69, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:243, sort: "ocean", name: "70th milestone reached", filename: "70", cost: 9000000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:244, sort: "ocean", name: "71th milestone reached", filename: "71", cost: 10000000000000000000, required: 71, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:245, sort: "ocean", name: "72th milestone reached", filename: "72", cost: 30000000000000000000, required: 72, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:246, sort: "ocean", name: "73th milestone reached", filename: "73", cost: 50000000000000000000, required: 73, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:247, sort: "ocean", name: "74th milestone reached", filename: "74", cost: 70000000000000000000, required: 74, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:248, sort: "ocean", name: "75th milestone reached", filename: "75", cost: 90000000000000000000, required: 75, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:249, sort: "ocean", name: "76th milestone reached", filename: "76", cost: 100000000000000000000, required: 76, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:250, sort: "ocean", name: "77th milestone reached", filename: "77", cost: 300000000000000000000, required: 77, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:251, sort: "ocean", name: "78th milestone reached", filename: "78", cost: 500000000000000000000, required: 78, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:252, sort: "ocean", name: "79th milestone reached", filename: "79", cost: 700000000000000000000, required: 79, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:253, sort: "ocean", name: "80th milestone reached", filename: "80", cost: 900000000000000000000, required: 80, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:254, sort: "ocean", name: "81st milestone reached", filename: "81", cost: 1000000000000000000000, required: 81, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:255, sort: "ocean", name: "82nd milestone reached", filename: "82", cost: 3000000000000000000000, required: 82, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:256, sort: "ocean", name: "83th milestone reached", filename: "83", cost: 5000000000000000000000, required: 83, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:257, sort: "ocean", name: "84th milestone reached", filename: "84", cost: 7000000000000000000000, required: 84, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:258, sort: "ocean", name: "85th milestone reached", filename: "85", cost: 9000000000000000000000, required: 85, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:259, sort: "ocean", name: "86th milestone reached", filename: "86", cost: 1000000000000000000000, required: 86, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:260, sort: "ocean", name: "87th milestone reached", filename: "87", cost: 3000000000000000000000, required: 87, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:261, sort: "ocean", name: "88th milestone reached", filename: "88", cost: 5000000000000000000000, required: 88, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:262, sort: "ocean", name: "89th milestone reached", filename: "89", cost: 7000000000000000000000, required: 89, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:263, sort: "ocean", name: "90th milestone reached", filename: "90", cost: 9000000000000000000000, required: 90, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:264, sort: "ocean", name: "91st milestone reached", filename: "91", cost: 1000000000000000000000, required: 91, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:265, sort: "ocean", name: "92nd milestone reached", filename: "92", cost: 1000000000000000000000, required: 92, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:266, sort: "ocean", name: "93th milestone reached", filename: "93", cost: 1000000000000000000000, required: 93, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:267, sort: "ocean", name: "94th milestone reached", filename: "94", cost: 1000000000000000000000, required: 94, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:268, sort: "ocean", name: "95th milestone reached", filename: "95", cost: 1000000000000000000000, required: 95, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:269, sort: "ocean", name: "96th milestone reached", filename: "96", cost: 1000000000000000000000, required: 96, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:270, sort: "ocean", name: "97th milestone reached", filename: "97", cost: 1000000000000000000000, required: 97, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:271, sort: "ocean", name: "98th milestone reached", filename: "98", cost: 1000000000000000000000, required: 98, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:272, sort: "ocean", name: "99th milestone reached", filename: "99", cost: 1000000000000000000000, required: 99, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	
	{id:273, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for each pipette you have, each air dryer gains 1% extra of its drops per second.", building: 3, pipnum: 1, pip:1},
	{id:274, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 2 pipettes you have, each bucket gains 1% extra of its drops per second.", building: 4, pipnum: 2, pip:1},
	{id:275, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 3 pipettes you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 3, pip:1},
	{id:276, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 4 pipettes you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 4, pip:1},
	{id:277, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 5 pipettes you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 5, pip:1},
	{id:278, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 6 pipettes you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 6, pip:1},
	{id:279, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 7 pipettes you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 7, pip:1},
	{id:280, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 8 pipettes you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 8, pip:1},
	{id:281, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 9 pipettes you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 9, pip:1},
	{id:282, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 10 pipettes you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 10, pip:1},
	{id:283, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 11 pipettes you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 11, pip:1},
	{id:284, sort: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 12 pipettes you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 12, pip:1},
	
	{id:285, sort: "contact", name: "First contact", filename: "upgrades", cx:-480 , cy:-660, cost: 60000000000000000, required: 10, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Amazing! We got in touch with the aliens!<br/>And because they are close the alien technology works better.<br/>Pipettes are twice as efficient."},
	{id:286, sort: "contactb", name: "Friendly aliens", filename: "upgrades", cx:-480 , cy:-660, cost: 60000000000, required: 0, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"The aliens seem friendly! The alien technology works better.<br/>Pipettes are twice as efficient."},
	{id:287, sort: "contactb", name: "Reluctant aliens", filename: "upgrades", cx:-480 , cy:-660, cost: 600000000000, required: 0, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"The aliens don't think we're ready for their technology."},
	
	{id:288, sort: "aliens", name: "Aliens are mad", filename: "upgrades", cx:-480 , cy:-660, cost: 600000000000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"Aliens found out we already use their technology and want water back."},
	
	{id:289, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000, required: 15, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:290, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000, required: 30, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:291, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:292, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:293, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000, required: 90, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:294, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000000, required: 110, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:295, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 1000000000000000000000000, required: 130, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:296, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000000000, required: 150, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:297, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 100000000000000000000000000, required: 170, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:298, sort: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 1000000000000000000000000000, required: 190, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	
	{id:299, sort: "multiknowhow", name: "Common seahorse", filename: "upgrades", cx:-240 , cy:-1140, cost: 10000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:300, sort: "multiknowhow", name: "Big belly seahorse", filename: "upgrades", cx:-300 , cy:-1140, cost: 10000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:301, sort: "multiknowhow", name: "Pacific seahorse", filename: "upgrades", cx:-360 , cy:-1140, cost: 10000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:302, sort: "multiknowhow", name: "Pipefish", filename: "upgrades", cx:-420 , cy:-1140, cost: 10000000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:303, sort: "multiknowhow", name: "Leafy Seadragon", filename: "upgrades", cx:-480 , cy:-1140, cost: 10000000000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},

	{id:304, sort: "multiknowhow", name: "Shrimp", filename: "upgrades", cx:0 , cy:-1200, cost: 10000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:305, sort: "multiknowhow", name: "Tiger prawn", filename: "upgrades", cx:-60 , cy:-1200, cost: 10000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:306, sort: "multiknowhow", name: "Red King Crab", filename: "upgrades", cx:-120 , cy:-1200, cost: 10000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:307, sort: "multiknowhow", name: "Japanese Spider Crab", filename: "upgrades", cx:-180 , cy:-1200, cost: 10000000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:308, sort: "multiknowhow", name: "Lobster", filename: "upgrades", cx:-240 , cy:-1200, cost: 10000000000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	
	{id:309, sort: "multiknowhow", name: "Dumbo Octopus", filename: "upgrades", cx:-300 , cy:-1200, cost: 10000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:310, sort: "multiknowhow", name: "Carribean reef octopus", filename: "upgrades", cx:-360 , cy:-1200, cost: 10000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:311, sort: "multiknowhow", name: "Vampire Squid", filename: "upgrades", cx:-420 , cy:-1200, cost: 10000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:312, sort: "multiknowhow", name: "Argentine Shortfin Squid", filename: "upgrades", cx:-480 , cy:-1200, cost: 10000000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:313, sort: "multiknowhow", name: "Striped Pyjama Squid", filename: "upgrades", cx:0 , cy:-1260, cost: 10000000000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},

	{id:314, sort: "multiknowhow", name: "Atlantic Bluefin Tuna", filename: "upgrades", cx:-60 , cy:-1260, cost: 100000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:315, sort: "multiknowhow", name: "Blue Marlin", filename: "upgrades", cx:-120 , cy:-1260, cost: 100000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:316, sort: "multiknowhow", name: "Atlantic Salmon", filename: "upgrades", cx:-180 , cy:-1260, cost: 100000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:317, sort: "multiknowhow", name: "Swordfish", filename: "upgrades", cx:-240 , cy:-1260, cost: 100000000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:318, sort: "multiknowhow", name: "Pacific Halibut", filename: "upgrades", cx:-300 , cy:-1260, cost: 100000000000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},

	{id:319, sort: "multiknowhow", name: "Blue Tang", filename: "upgrades", cx:-360 , cy:-1260, cost: 1000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:320, sort: "multiknowhow", name: "Angel Fish", filename: "upgrades", cx:-420 , cy:-1260, cost: 1000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:321, sort: "multiknowhow", name: "Clown Fish", filename: "upgrades", cx:-480 , cy:-1260, cost: 1000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:322, sort: "multiknowhow", name: "Blue Devil", filename: "upgrades", cx:0 , cy:-1320, cost: 1000000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:323, sort: "multiknowhow", name: "Butterfly Fish", filename: "upgrades", cx:-60 , cy:-1320, cost: 1000000000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},

	{id:324, sort: "multiknowhow", name: "Humpback Angler Fish", filename: "upgrades", cx:-120 , cy:-1320, cost: 1000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:325, sort: "multiknowhow", name: "Common Fangtooth", filename: "upgrades", cx:-180 , cy:-1320, cost: 1000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:326, sort: "multiknowhow", name: "Red Lion Fish", filename: "upgrades", cx:-240 , cy:-1320, cost: 1000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:327, sort: "multiknowhow", name: "Sarcastic Fringehead", filename: "upgrades", cx:-300 , cy:-1320, cost: 1000000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:328, sort: "multiknowhow", name: "Black Dragon Fish", filename: "upgrades", cx:-360 , cy:-1320, cost: 1000000000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},

	{id:329, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 50000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per faucet, and faucets gain +0.1% per air dryer.", building: 3, pipnum: 6},
	{id:330, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 700000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per garden hose, and garden hoses gain +0.1% per bucket.", building: 4, pipnum: 7},
	{id:331, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 11000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per truck, and trucks gain +0.1% per rain dance.", building: 5, pipnum: 8},
	{id:332, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 170000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per fire hose, and fire hoses gain +0.1% per air dryer.", building: 3, pipnum: 9},
	{id:333, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 2500000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per ice mine, and ice mines gain +0.1% per bucket.", building: 4, pipnum: 10},
	{id:334, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 35000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per space ship, and space ships gain +0.1% per rain dance.", building: 5, pipnum: 11},
	{id:335, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 470000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per wormhole, and wormholes gain +0.1% per air dryer.", building: 3, pipnum: 12},
	{id:336, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 6000000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per river, and rivers gain +0.1% per bucket.", building: 4, pipnum: 13},
	{id:337, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 70000000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per collider, and colliders gain +0.1% per rain dance.", building: 5, pipnum: 14},
	
	{id:338, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 6000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Faucets gain +5% per fire hose, and fire hoses gain +0.1% per faucet.", building: 6, pipnum: 9},
	{id:339, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 82000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Garden hoses gain +5% per ice mine, and ice mines gain +0.1% per garden hose.", building: 7, pipnum: 10},
	{id:340, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 1100000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Trucks gain +5% per space ship, and space ships gain +0.1% per truck.", building: 8, pipnum: 11},
	{id:341, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 15500000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Faucets gain +5% per wormhole, and wormholes gain +0.1% per faucet.", building: 6, pipnum: 12},
	{id:342, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 185000000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Garden hoses gain +5% per river, and rivers gain +0.1% per garden hose.", building: 7, pipnum: 13},
	{id:343, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 2500000000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Trucks gain +5% per colledir, and colliders gain +0.1% per truck.", building: 8, pipnum: 14},
	{id:344, sort: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 50000000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Helping hands gain +5% per collider, and colliders gain +0.1% per helping hand.", building: 1, pipnum: 14},
	
	{id:345, sort: "poseidon", name: "poseidon", filename: "poseidonsmall", cx:0 , cy:0, cost: 10000000, required: 22, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description: "Worship poseidon, God of the seas.", building: 0, pipnum: 0},

	
	{id:346, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 20 air dryers you have, each bucket gains 1% extra of its drops per second.", building: 4, pipnum: 20, pip:2},
	{id:347, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 30 air dryers you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 30, pip:2},
	{id:348, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 40 air dryers you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:2},
	{id:349, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 50 air dryers you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:2},
	{id:350, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 60 air dryers you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:2},
	{id:351, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 70 air dryers you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:2},
	{id:352, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 80 air dryers you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:2},
	{id:353, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 90 air dryers you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:2},
	{id:354, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 100 air dryers you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:2},
	{id:355, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 110 air dryers you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:2},
	{id:356, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 120 air dryers you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:2},

	{id:357, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 30 buckets you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 30, pip:3},
	{id:358, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 40 buckets you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:3},
	{id:359, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 50 buckets you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:3},
	{id:360, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 60 buckets you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:3},
	{id:361, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 70 buckets you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:3},
	{id:362, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 80 buckets you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:3},
	{id:363, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 90 buckets you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:3},
	{id:364, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 100 buckets you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:3},
	{id:365, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 110 buckets you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:3},
	{id:366, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 120 buckets you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:3},

	{id:367, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 40 raindances you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:4},
	{id:368, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 50 raindances you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:4},
	{id:369, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 60 raindances you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:4},
	{id:370, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 70 raindances you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:4},
	{id:371, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 80 raindances you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:4},
	{id:372, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 90 raindances you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:4},
	{id:373, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 100 raindances you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:4},
	{id:374, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 110 raindances you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:4},
	{id:375, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 120 raindances you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:4},
	
	{id:376, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 50 faucets you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:5},
	{id:377, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 60 faucets you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:5},
	{id:378, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 100000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 70 faucets you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:5},
	{id:379, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 80 faucets you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:5},
	{id:380, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 90 faucets you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:5},
	{id:381, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 100000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 100 faucets you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:5},
	{id:382, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 110 faucets you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:5},
	{id:383, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 120 faucets you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:5},

	{id:384, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 60 garden hoses you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:6},
	{id:385, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 200000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 70 garden hoses you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:6},
	{id:386, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 2000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 80 garden hoses you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:6},
	{id:387, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 90 garden hoses you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:6},
	{id:388, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 200000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 100 garden hoses you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:6},
	{id:389, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 2000000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 110 garden hoses you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:6},
	{id:390, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 120 garden hoses you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:6},

	{id:391, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 300000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 70 trucks you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:7},
	{id:392, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 3000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 80 trucks you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:7},
	{id:393, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 30000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 90 trucks you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:7},
	{id:394, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 300000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 100 trucks you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:7},
	{id:395, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 3000000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 110 trucks you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:7},
	{id:396, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 30000000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 120 trucks you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:7},

	{id:397, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 4000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 80 fire hoses you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:8},
	{id:398, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 40000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 90 fire hoses you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:8},
	{id:399, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 400000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 100 fire hoses you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:8},
	{id:400, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 4000000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 110 fire hoses you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:8},
	{id:401, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 40000000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 120 fire hoses you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:8},

	{id:402, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 50000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 90 ice mines you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:9},
	{id:403, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 500000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 100 ice mines you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:9},
	{id:404, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 5000000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 110 ice mines you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:9},
	{id:405, sort: "alientechb", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 50000000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 120 ice mines you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:9}

	
];

var _achievements = [
	{sort: "drops", name: "Make one drop", filename: "achievements", cx:0, cy:0, required: 1, description:"Make one drop"},
	{sort: "drops", name: "Make a thousand drops", filename: "achievements", cx:-60, cy:0,  required: 1000, description:"Make a thousand drops"},
	{sort: "drops", name: "Make 100,000 drops", filename: "achievements", cx:-120, cy:0,  required: 100000, description:"Make 100,000 drops"},
	{sort: "drops", name: "Make a million drops", filename: "achievements", cx:-180, cy:0,  required: 1000000, description:"Make a million drops"},
	{sort: "drops", name: "Make a 100 million drops", filename: "achievements", cx:-240, cy:0,  required: 100000000, description:"Make a 100 million drops"},
	{sort: "drops", name: "Make a billion drops", filename: "achievements", cx:-300, cy:0,  required: 1000000000, description:"Make a billion drops"},
	{sort: "drops", name: "Make a 100 billion drops", filename: "achievements", cx:-360, cy:0,  required: 100000000000, description:"Make a 100 billion drops"},
	{sort: "drops", name: "Make a trillion drops", filename: "achievements", cx:-420, cy:0,  required: 1000000000000, description:"Make a trillion drops"},
	{sort: "drops", name: "Make a 100 trillion drops", filename: "achievements", cx:0, cy:-60,  required: 100000000000000, description:"Make a 100 trillion drops"},
	{sort: "drops", name: "Make a quadrillion drops", filename: "achievements", cx:-60, cy:-60,  required: 1000000000000000, description:"Make a quadrillion drops"},
	{sort: "drops", name: "Make a 100 quadrillion drops", filename: "achievements", cx:-120, cy:-60,  required: 100000000000000000, description:"Make a 100 quadrillion drops"},
	{sort: "drops", name: "Make a quintillion drops", filename: "achievements", cx:-180, cy:-60,  required: 1000000000000000000, description:"Make a quintillion drops"},
	{sort: "drops", name: "Make a 100 quintillion drops", filename: "achievements", cx:-240, cy:-60,  required: 100000000000000000000, description:"Make a 100 quintillion drops"},
	{sort: "drops", name: "Make a sextillion drops", filename: "achievements", cx:-300, cy:-60,  required: 1000000000000000000000, description:"Make a sextillion drops"},
	{sort: "drops", name: "Make a 100 sextillion drops", filename: "achievements", cx:-360, cy:-60,  required: 100000000000000000000000, description:"Make a 100 sextillion drops"},
	{sort: "drops", name: "Make a septillion drops", filename: "achievements", cx:-420, cy:-60,  required: 1000000000000000000000000, description:"Make a septillion drops"},
	{sort: "drops", name: "Make a 100 septillion drops", filename: "achievements", cx:0, cy:-120,  required: 100000000000000000000000000, description:"Make a 100 septillion drops"},
	{sort: "drops", name: "Make an octillion drops", filename: "achievements", cx:-60, cy:-120,  required: 1000000000000000000000000000, description:"Make an octillion drops"},
	{sort: "drops", name: "Make a 100 octillion drops", filename: "achievements", cx:-120, cy:-120,  required: 100000000000000000000000000000, description:"Make a 100 octillion drops"},
	{sort: "drops", name: "Make a nonillion drops", filename: "achievements", cx:-180, cy:-120,  required: 1000000000000000000000000000000, description:"Make a nonillion drops"},
	{sort: "drops", name: "Make a 100 nonillion drops", filename: "achievements", cx:-240, cy:-120,  required: 100000000000000000000000000000000, description:"Make a 100 nonillion drops"},
	{sort: "drops", name: "Make a decillion drops", filename: "achievements", cx:-300, cy:-120,  required: 1000000000000000000000000000000000, description:"Make a decillion drops"},
	{sort: "drops", name: "Make a 100 decillion drops", filename: "achievements", cx:-360, cy:-120,  required: 100000000000000000000000000000000000, description:"Make a 100 decillion drops"},
	
	{sort: "persecond", name: "Newborn", filename: "achievements", cx:0, cy:0,  required: 1, description:"Make one drop per second"},
	{sort: "persecond", name: "Baby", filename: "achievements", cx:-60, cy:0,  required: 10, description:"Make ten drops per second"},
	{sort: "persecond", name: "Toddler", filename: "achievements", cx:-120, cy:0,  required: 100, description:"Make 100 drops per second"},
	{sort: "persecond", name: "Gradeschooler", filename: "achievements", cx:-180, cy:0,  required: 1000, description:"Make 1,000 drops per second"},
	{sort: "persecond", name: "Teen", filename: "achievements", cx:-240, cy:0,  required: 10000, description:"Make 10,000 drops per second"},
	{sort: "persecond", name: "Young adult", filename: "achievements", cx:-300, cy:0,  required: 100000, description:"Make 100,000 drops per second"},
	{sort: "persecond", name: "Student", filename: "achievements", cx:-360, cy:0,  required: 1000000, description:"Make 1 million drops per second"},
	{sort: "persecond", name: "College student", filename: "achievements", cx:-420, cy:0,  required: 10000000, description:"Make 10 million drops per second"},
	{sort: "persecond", name: "Undergraduate", filename: "achievements", cx:0, cy:-60,  required: 100000000, description:"Make 100 million drops per second"},
	{sort: "persecond", name: "Bachelor", filename: "achievements", cx:-60, cy:-60,  required: 1000000000, description:"Make 1 billion drops per second"},
	{sort: "persecond", name: "Graduate", filename: "achievements", cx:-120, cy:-60,  required: 10000000000, description:"Make 10 billion drops per second"},
	{sort: "persecond", name: "Master", filename: "achievements", cx:-180, cy:-60,  required: 100000000000, description:"Make 100 billion drops per second"},
	{sort: "persecond", name: "Postgraduate", filename: "achievements", cx:-240, cy:-60,  required: 1000000000000, description:"Make 1 trillion drops per second"},
	{sort: "persecond", name: "Intern", filename: "achievements", cx:-300, cy:-60,  required: 10000000000000, description:"Make 10 trillion drops per second"},
	{sort: "persecond", name: "Entry level job", filename: "achievements", cx:-360, cy:-60,  required: 100000000000000, description:"Make 100 trillion drops per second"},
	{sort: "persecond", name: "Middle level job", filename: "achievements", cx:-420, cy:-60,  required: 1000000000000000, description:"Make 1 quadrillion drops per second"},
	{sort: "persecond", name: "Chief Sales Officer", filename: "achievements", cx:0, cy:-120,  required: 10000000000000000, description:"Make 10 quadrillion drops per second"},
	{sort: "persecond", name: "Chief Information Officer", filename: "achievements", cx:-60, cy:-120,  required: 100000000000000000, description:"Make 100 quadrillion drops per second"},
	{sort: "persecond", name: "Chief Operations Officer", filename: "achievements", cx:-120, cy:-120,  required: 1000000000000000000, description:"Make 1 quintillion drops per second"},
	{sort: "persecond", name: "Chief Financial Officer", filename: "achievements", cx:-180, cy:-120,  required: 10000000000000000000, description:"Make 10 quintillion drops per second"},
	{sort: "persecond", name: "Chief Executive Officer", filename: "achievements", cx:-240, cy:-120,  required: 100000000000000000000, description:"Make 100 quintillion drops per second"},
	
	{sort: "clicking", name: "Starting to click?", filename: "upgrades", cx:0, cy:-60,  required: 1000, description:"Make 1,000 drops from clicking"},
	{sort: "clicking", name: "Getting the hang of clicking", filename: "upgrades",  cx:-60, cy:-60, required: 100000, description:"Make 100,000 drops from clicking"},
	{sort: "clicking", name: "Just clicking away", filename: "upgrades", cx:-120, cy:-60,  required: 1000000, description:"Make 1 million drops from clicking"},
	{sort: "clicking", name: "Keep on clicking", filename: "upgrades", cx:-180, cy:-60,  required: 10000000, description:"Make 10 million drops from clicking"},
	{sort: "clicking", name: "Aren't you tired of clicking?", filename: "upgrades", cx:-240, cy:-60,  required: 1000000000, description:"Make 1 billion drops from clicking"},
	{sort: "clicking", name: "Nothing better to do than clicking", filename: "upgrades", cx:-300, cy:-60,  required: 10000000000, description:"Make 10 billion drops from clicking"},
	{sort: "clicking", name: "Still clicking, are you?", filename: "upgrades", cx:-360, cy:-60,  required: 1000000000000, description:"Make 1 trillion drops from clicking"},
	{sort: "clicking", name: "Going strong, don't give up now", filename: "upgrades", cx:-420, cy:-60,  required: 10000000000000, description:"Make 10 trillion drops from clicking"},
	{sort: "clicking", name: "You must be getting tired now", filename: "upgrades", cx:-480, cy:-60,  required: 1000000000000000, description:"Make 1 quadrillion drops from clicking"},
	{sort: "clicking", name: "Master clicker you are", filename: "upgrades", cx:-480, cy:-120,  required: 10000000000000000, description:"Make 10 quadrillion drops from clicking"},
	{sort: "clicking", name: "Don't you have carpal tunnel syndrome yet?", filename: "upgrades", cx:-480, cy:-180,  required: 1000000000000000000, description:"Make 1 quintillion drops from clicking"},
	{sort: "clicking", name: "How many click outsourced?", filename: "upgrades", cx:-480, cy:-240,  required: 10000000000000000000, description:"Make 10 quintillion drops from clicking"},
	
	{sort: "helpinghand", name: "An extra hand", filename: "upgrades", cx:0, cy:-60,  required: 1, description:"Have 1 Helping hand"},
	{sort: "helpinghand", name: "Injury prevention", filename: "upgrades", cx:-60, cy:-60,  required: 50, description:"Have 50 Helping hands"},
	{sort: "helpinghand", name: "Clicking With All Fingers and ten hands", filename: "upgrades", cx:-120, cy:-60,  required: 100, description:"Have 100 Helping hands"},
	{sort: "helpinghand", name: "A Lot Of Fingers", filename: "upgrades", cx:-180, cy:-60,  required: 150, description:"Have 150 Helping hands"},
	{sort: "helpinghand", name: "Even More Fingers", filename: "upgrades", cx:-240, cy:-60,  required: 200, description:"Have 200 Helping hands"},
	{sort: "helpinghand", name: "Where do you get all these hands?", filename: "upgrades", cx:-300, cy:-60,  required: 250, description:"Have 250 Helping hands"},
	{sort: "helpinghand", name: "Is it even possible to get more?", filename: "upgrades", cx:-360, cy:-60,  required: 300, description:"Have 300 Helping hands"},
	{sort: "helpinghand", name: "I guess it is.", filename: "upgrades", cx:-420, cy:-60,  required: 400, description:"Have 400 Helping hands"},
	
	{sort: "pipette", name: "1", filename: "upgrades", cx:0, cy:-120,  required: 1, description:"Have 1 pipette"},
	{sort: "pipette", name: "50", filename: "upgrades", cx:-60, cy:-120,  required: 50, description:"Have 50 pipettes"},
	{sort: "pipette", name: "100", filename: "upgrades", cx:-120, cy:-120,  required: 100, description:"Have 100 pipettes"},
	{sort: "pipette", name: "150", filename: "upgrades",  cx:-180, cy:-120, required: 150, description:"Have 150 pipettes"},
	{sort: "pipette", name: "200", filename: "upgrades", cx:-240, cy:-120,  required: 200, description:"Have 200 pipettes"},
	{sort: "pipette", name: "250", filename: "upgrades", cx:-300, cy:-120,  required: 250, description:"Have 250 pipettes"},
	{sort: "pipette", name: "300", filename: "upgrades", cx:-360, cy:-120,  required: 300, description:"Have 300 pipettes"},
	{sort: "pipette", name: "400", filename: "upgrades", cx:-420, cy:-120, required: 400, description:"Have 400 pipettes"},
	
	{sort: "airdryer", name: "1", filename: "upgrades", cx:0, cy:-180,  required: 1, description:"Have 1 air dryer"},
	{sort: "airdryer", name: "50", filename: "upgrades", cx:-60, cy:-180,  required: 50, description:"Have 50 air dryers"},
	{sort: "airdryer", name: "100", filename: "upgrades", cx:-120, cy:-180,  required: 100, description:"Have 100 air dryers"},
	{sort: "airdryer", name: "150", filename: "upgrades", cx:-180, cy:-180,  required: 150, description:"Have 150 air dryers"},
	{sort: "airdryer", name: "200", filename: "upgrades", cx:-240, cy:-180,  required: 200, description:"Have 200 air dryers"},
	{sort: "airdryer", name: "250", filename: "upgrades", cx:-300, cy:-180,  required: 250, description:"Have 250 air dryers"},
	{sort: "airdryer", name: "300", filename: "upgrades", cx:-360, cy:-180,  required: 300, description:"Have 300 air dryers"},
	{sort: "airdryer", name: "400", filename: "upgrades", cx:-240, cy:-180,  required: 400, description:"Have 400 air dryers"},

	{sort: "bucket", name: "1", filename: "upgrades", cx:0, cy:-240,  required: 1, description:"Have 1 bucket"},
	{sort: "bucket", name: "50", filename: "upgrades", cx:-60, cy:-240, required: 50, description:"Have 50 buckets"},
	{sort: "bucket", name: "100", filename: "upgrades", cx:-120, cy:-240,  required: 100, description:"Have 100 buckets"},
	{sort: "bucket", name: "150", filename: "upgrades", cx:-180, cy:-240,  required: 150, description:"Have 150 buckets"},
	{sort: "bucket", name: "200", filename: "upgrades", cx:-240, cy:-240,  required: 200, description:"Have 200 buckets"},
	{sort: "bucket", name: "250", filename: "upgrades", cx:-300, cy:-240,  required: 250, description:"Have 250 buckets"},
	{sort: "bucket", name: "300", filename: "upgrades", cx:-360, cy:-240,  required: 300, description:"Have 300 buckets"},
	{sort: "bucket", name: "400", filename: "upgrades", cx:-420, cy:-240,  required: 400, description:"Have 400 buckets"},

	{sort: "raindance", name: "1", filename: "upgrades", cx:0, cy:-300,  required: 1, description:"Have 1 raindance"},
	{sort: "raindance", name: "50", filename: "upgrades", cx:-60, cy:-300,  required: 50, description:"Have 50 raindances"},
	{sort: "raindance", name: "100", filename: "upgrades", cx:-120, cy:-300,  required: 100, description:"Have 100 raindances"},
	{sort: "raindance", name: "150", filename: "upgrades", cx:-180, cy:-300,  required: 150, description:"Have 150 raindances"},
	{sort: "raindance", name: "200", filename: "upgrades", cx:-240, cy:-300,  required: 200, description:"Have 200 raindances"},
	{sort: "raindance", name: "250", filename: "upgrades", cx:-300, cy:-300,  required: 250, description:"Have 250 raindances"},
	{sort: "raindance", name: "300", filename: "upgrades", cx:-360, cy:-300,  required: 300, description:"Have 300 raindances"},
	{sort: "raindance", name: "400", filename: "upgrades", cx:-420, cy:-300,  required: 400, description:"Have 400 raindances"},
	
	{sort: "faucet", name: "1", filename: "upgrades", cx:0, cy:-360,  required: 1, description:"Have 1 faucet"},
	{sort: "faucet", name: "50", filename: "upgrades", cx:-60, cy:-360,  required: 50, description:"Have 50 faucets"},
	{sort: "faucet", name: "100", filename: "upgrades", cx:-120, cy:-360,  required: 100, description:"Have 100 faucets"},
	{sort: "faucet", name: "150", filename: "upgrades", cx:-180, cy:-360,  required: 150, description:"Have 150 faucets"},
	{sort: "faucet", name: "200", filename: "upgrades", cx:-240, cy:-360,  required: 200, description:"Have 200 faucets"},
	{sort: "faucet", name: "250", filename: "upgrades", cx:-300, cy:-360,  required: 250, description:"Have 250 faucets"},
	{sort: "faucet", name: "300", filename: "upgrades", cx:-360, cy:-360,  required: 300, description:"Have 300 faucets"},
	{sort: "faucet", name: "400", filename: "upgrades", cx:-420, cy:-360,  required: 400, description:"Have 400 faucets"},
	
	{sort: "gardenhose", name: "1", filename: "upgrades", cx:0, cy:-420,  required: 1, description:"Have 1 garden hose"},
	{sort: "gardenhose", name: "50", filename: "upgrades", cx:-60, cy:-420,  required: 50, description:"Have 50 garden hoses"},
	{sort: "gardenhose", name: "100", filename: "upgrades", cx:-120, cy:-420,  required: 100, description:"Have 100 garden hoses"},
	{sort: "gardenhose", name: "150", filename: "upgrades", cx:-180, cy:-420,  required: 150, description:"Have 150 garden hoses"},
	{sort: "gardenhose", name: "200", filename: "upgrades", cx:-240, cy:-420,  required: 200, description:"Have 200 garden hoses"},
	{sort: "gardenhose", name: "250", filename: "upgrades", cx:-300, cy:-420,  required: 250, description:"Have 250 garden hoses"},
	{sort: "gardenhose", name: "300", filename: "upgrades", cx:-360, cy:-420,  required: 300, description:"Have 300 garden hoses"},
	{sort: "gardenhose", name: "400", filename: "upgrades", cx:-420, cy:-420,  required: 400, description:"Have 400 garden hoses"},

	{sort: "truck", name: "1", filename: "upgrades", cx:0, cy:-480,  required: 1, description:"Have 1 truck"},
	{sort: "truck", name: "50", filename: "upgrades", cx:-60, cy:-480,  required: 50, description:"Have 50 trucks"},
	{sort: "truck", name: "100", filename: "upgrades", cx:-120, cy:-480,  required: 100, description:"Have 100 trucks"},
	{sort: "truck", name: "150", filename: "upgrades", cx:-180, cy:-480,  required: 150, description:"Have 150 trucks"},
	{sort: "truck", name: "200", filename: "upgrades", cx:-240, cy:-480,  required: 200, description:"Have 200 trucks"},
	{sort: "truck", name: "250", filename: "upgrades", cx:-300, cy:-480,  required: 250, description:"Have 250 trucks"},
	{sort: "truck", name: "300", filename: "upgrades", cx:-360, cy:-480,  required: 300, description:"Have 300 trucks"},
	{sort: "truck", name: "400", filename: "upgrades", cx:-420, cy:-480,  required: 400, description:"Have 400 trucks"},

	{sort: "firehose", name: "1", filename: "upgrades", cx:0, cy:-540,  required: 1, description:"Have 1 fire hose"},
	{sort: "firehose", name: "50", filename: "upgrades", cx:-60, cy:-540,  required: 50, description:"Have 50 fire hoses"},
	{sort: "firehose", name: "100", filename: "upgrades", cx:-120, cy:-540,  required: 100, description:"Have 100 fire hoses"},
	{sort: "firehose", name: "150", filename: "upgrades", cx:-180, cy:-540,  required: 150, description:"Have 150 fire hoses"},
	{sort: "firehose", name: "200", filename: "upgrades", cx:-240, cy:-540,  required: 200, description:"Have 200 fire hoses"},
	{sort: "firehose", name: "250", filename: "upgrades", cx:-300, cy:-540,  required: 250, description:"Have 250 fire hoses"},
	{sort: "firehose", name: "300", filename: "upgrades", cx:-360, cy:-540,  required: 300, description:"Have 300 fire hoses"},
	{sort: "firehose", name: "400", filename: "upgrades", cx:-420, cy:-540,  required: 400, description:"Have 400 fire hoses"},
	
	{sort: "icemining", name: "1", filename: "upgrades", cx:0, cy:-600,  required: 1, description:"Have 1 ice mine"},
	{sort: "icemining", name: "50", filename: "upgrades", cx:-60, cy:-600,  required: 50, description:"Have 50 ice mines"},
	{sort: "icemining", name: "100", filename: "upgrades", cx:-120, cy:-600,  required: 100, description:"Have 100 ice mines"},
	{sort: "icemining", name: "150", filename: "upgrades", cx:-180, cy:-600,  required: 150, description:"Have 150 ice mines"},
	{sort: "icemining", name: "200", filename: "upgrades", cx:-240, cy:-600,  required: 200, description:"Have 200 ice mines"},
	{sort: "icemining", name: "250", filename: "upgrades", cx:-300, cy:-600,  required: 250, description:"Have 250 ice mines"},
	{sort: "icemining", name: "300", filename: "upgrades", cx:-360, cy:-600,  required: 300, description:"Have 300 ice mines"},
	{sort: "icemining", name: "400", filename: "upgrades", cx:-420, cy:-600,  required: 400, description:"Have 400 ice mines"},
	
	{sort: "spaceship", name: "1", filename: "upgrades", cx:0, cy:-660,  required: 1, description:"Have 1 spaceship"},
	{sort: "spaceship", name: "50", filename: "upgrades", cx:-60, cy:-660,  required: 50, description:"Have 50 spaceships"},
	{sort: "spaceship", name: "100", filename: "upgrades", cx:-120, cy:-660,  required: 100, description:"Have 100 spaceships"},
	{sort: "spaceship", name: "150", filename: "upgrades", cx:-180, cy:-660,  required: 150, description:"Have 150 spaceships"},
	{sort: "spaceship", name: "200", filename: "upgrades", cx:-240, cy:-660,  required: 200, description:"Have 200 spaceships"},
	{sort: "spaceship", name: "250", filename: "upgrades", cx:-300, cy:-660,  required: 250, description:"Have 250 spaceships"},
	{sort: "spaceship", name: "300", filename: "upgrades", cx:-360, cy:-660,  required: 300, description:"Have 300 spaceships"},
	{sort: "spaceship", name: "400", filename: "upgrades", cx:-420, cy:-660,  required: 400, description:"Have 400 spaceships"},
	
	{sort: "wormhole", name: "1", filename: "upgrades", cx:0, cy:-720,  required: 1, description:"Have 1 wormhole"},
	{sort: "wormhole", name: "50", filename: "upgrades", cx:-60, cy:-720,  required: 50, description:"Have 50 wormholes"},
	{sort: "wormhole", name: "100", filename: "upgrades", cx:-120, cy:-720,  required: 100, description:"Have 100 wormholes"},
	{sort: "wormhole", name: "150", filename: "upgrades", cx:-180, cy:-720,  required: 150, description:"Have 150 wormholes"},
	{sort: "wormhole", name: "200", filename: "upgrades", cx:-240, cy:-720,  required: 200, description:"Have 200 wormholes"},
	{sort: "wormhole", name: "250", filename: "upgrades", cx:-300, cy:-720,  required: 250, description:"Have 250 wormholes"},
	{sort: "wormhole", name: "300", filename: "upgrades", cx:-360, cy:-720,  required: 300, description:"Have 300 wormholes"},
	{sort: "wormhole", name: "400", filename: "upgrades", cx:-420, cy:-720,  required: 400, description:"Have 400 wormholes"},
	
	{sort: "river", name: "1", filename: "upgrades", cx:0, cy:-780,  required: 1, description:"Have 1 river"},
	{sort: "river", name: "50", filename: "upgrades", cx:-60, cy:-780,  required: 50, description:"Have 50 rivers"},
	{sort: "river", name: "100", filename: "upgrades", cx:-120, cy:-780,  required: 100, description:"Have 100 rivers"},
	{sort: "river", name: "150", filename: "upgrades", cx:-180, cy:-780,  required: 150, description:"Have 150 rivers"},
	{sort: "river", name: "200", filename: "upgrades", cx:-240, cy:-780,  required: 200, description:"Have 200 rivers"},
	{sort: "river", name: "250", filename: "upgrades", cx:-300, cy:-780,  required: 250, description:"Have 250 rivers"},
	{sort: "river", name: "300", filename: "upgrades", cx:-360, cy:-780,  required: 300, description:"Have 300 rivers"},
	{sort: "river", name: "400", filename: "upgrades", cx:-420, cy:-780,  required: 400, description:"Have 400 rivers"},
	
	{sort: "collider", name: "1", filename: "upgrades", cx:0, cy:-840,  required: 1, description:"Have 1 large H-O collider"},
	{sort: "collider", name: "50", filename: "upgrades", cx:-60, cy:-840,  required: 50, description:"Have 50 large H-O colliders"},
	{sort: "collider", name: "100", filename: "upgrades", cx:-120, cy:-840,  required: 100, description:"Have 100 large H-O colliders"},
	{sort: "collider", name: "150", filename: "upgrades", cx:-180, cy:-840,  required: 150, description:"Have 150 large H-O colliders"},
	{sort: "collider", name: "200", filename: "upgrades", cx:-240, cy:-840,  required: 200, description:"Have 200 large H-O colliders"},
	{sort: "collider", name: "250", filename: "upgrades", cx:-300, cy:-840,  required: 250, description:"Have 250 large H-O colliders"},
	{sort: "collider", name: "300", filename: "upgrades", cx:-360, cy:-840,  required: 300, description:"Have 300 large H-O colliders"},
	{sort: "collider", name: "400", filename: "upgrades", cx:-420, cy:-840,  required: 400, description:"Have 400 large H-O colliders"},
	
	{sort: "totalbuildings", name: "Amateur builder", filename: "achievements", cx:-420, cy:-120,  required:100 , description:"Have 100 buildings in total."},
	{sort: "totalbuildings", name: "Contractor", filename: "achievements", cx:-480, cy:0,  required:500 , description:"Have 500 buildings in total."},
	{sort: "totalbuildings", name: "City developer", filename: "achievements", cx:-480, cy:-60,  required:1000 , description:"Have 1000 buildings in total."},
	{sort: "totalbuildings", name: "Building God", filename: "achievements", cx:-480, cy:-120,  required:1500 , description:"Have 1500 buildings in total."},
	
	{sort: "buildingprod", name: "Hand instructor", filename: "upgrades", cx:0, cy:-60,  required: 10000000000000000000, other: 0, description:"Make 10 quintillion drops from Helping hands alone."},
	{sort: "buildingprod", name: "Hand manager", filename: "upgrades", cx:-300, cy:-60,  required: 10000000000000000000000, other: 0, description:"Make 10 sextillion drops from Helping hands alone."},
	{sort: "buildingprod", name: "Pipette instructor", filename: "upgrades", cx:0, cy:-120,  required: 10000000000000000000, other: 1, description:"Make 10 quintillion drops from pipettes alone."},
	{sort: "buildingprod", name: "Pipette manager", filename: "upgrades", cx:-300, cy:-120,  required: 10000000000000000000000, other: 1, description:"Make 10 quintillion drops from pipettes alone."},
	{sort: "buildingprod", name: "Air dryer instructor", filename: "upgrades", cx:0, cy:-180,  required: 10000000000000, other: 2, description:"Make 10 trillion drops from air dryers alone."},
	{sort: "buildingprod", name: "Air Dryer manager", filename: "upgrades", cx:-300, cy:-180,  required: 10000000000000000, other: 2, description:"Make 10 quadrillion drops from air dryers alone."},
	{sort: "buildingprod", name: "Bucket instructor", filename: "upgrades", cx:0, cy:-240,  required: 100000000000000, other: 3, description:"Make 100 trillion drops from buckets alone."},
	{sort: "buildingprod", name: "Bucket manager", filename: "upgrades", cx:-300, cy:-240,  required: 100000000000000000, other: 3, description:"Make 100 quadrillion drops from buckets alone."},
	{sort: "buildingprod", name: "Raindance instructor", filename: "upgrades", cx:0, cy:-300,  required: 1000000000000000, other: 4, description:"Make 1 quadrillion drops from raindances alone."},
	{sort: "buildingprod", name: "Raindance manager", filename: "upgrades", cx:-300, cy:-300,  required: 1000000000000000000, other: 4, description:"Make 1 quintillion drops from raindances alone."},
	{sort: "buildingprod", name: "Faucet instructor", filename: "upgrades", cx:0, cy:-360,  required: 10000000000000000, other: 5, description:"Make 10 quadrillion drops from faucets alone."},
	{sort: "buildingprod", name: "Faucet manager", filename: "upgrades", cx:-300, cy:-360,  required: 10000000000000000000, other: 5, description:"Make 10 quintillion drops from faucets alone."},
	{sort: "buildingprod", name: "Garden hose instructor", filename: "upgrades", cx:0, cy:-420,  required: 100000000000000000, other: 6, description:"Make 100 quadrillion drops from garden hoses alone."},
	{sort: "buildingprod", name: "Garden hose manager", filename: "upgrades", cx:-300, cy:-420,  required: 100000000000000000000, other: 6, description:"Make 100 quintillion drops from garden hoses alone."},
	{sort: "buildingprod", name: "Truck instructor", filename: "upgrades", cx:0, cy:-480,  required: 1000000000000000000, other: 7, description:"Make 1 quintillion drops from trucks alone."},
	{sort: "buildingprod", name: "Truck manager", filename: "upgrades", cx:-300, cy:-480,  required: 1000000000000000000000, other: 7, description:"Make 1 sextillion drops from trucks alone."},
	{sort: "buildingprod", name: "Fire hose instructor", filename: "upgrades", cx:0, cy:-540,  required: 10000000000000000000, other: 8, description:"Make 10 quintillion drops from fire hoses alone."},
	{sort: "buildingprod", name: "Fire hose manager", filename: "upgrades", cx:-300, cy:-540,  required: 10000000000000000000000, other: 8, description:"Make 10 sextillion drops from fire hoses alone."},
	{sort: "buildingprod", name: "Ice mine instructor", filename: "upgrades", cx:0, cy:-600,  required: 100000000000000000000, other: 9, description:"Make 100 quintillion drops from ice mines alone."},
	{sort: "buildingprod", name: "Ice mine manager", filename: "upgrades", cx:-300, cy:-600,  required: 100000000000000000000000, other: 9, description:"Make 100 sextillion drops from ice mines alone."},
	{sort: "buildingprod", name: "Spaceship instructor", filename: "upgrades", cx:0, cy:-660,  required: 1000000000000000000000, other: 10, description:"Make 1 sextillion drops from spaceships alone."},
	{sort: "buildingprod", name: "Spaceship manager", filename: "upgrades", cx:-300, cy:-660,  required: 1000000000000000000000000, other: 10, description:"Make 1 septillion drops from spaceships alone."},
	{sort: "buildingprod", name: "Wormhole instructor", filename: "upgrades", cx:0, cy:-720,  required: 10000000000000000000000, other: 11, description:"Make 10 sextillion drops from wormholes alone."},
	{sort: "buildingprod", name: "Wormhole manager", filename: "upgrades", cx:-300, cy:-720,  required: 10000000000000000000000000, other: 11, description:"Make 10 septillion drops from wormholes alone."},
	{sort: "buildingprod", name: "River instructor", filename: "upgrades", cx:0, cy:-780,  required: 100000000000000000000000, other: 12, description:"Make 100 sextillion drops from rivers alone."},
	{sort: "buildingprod", name: "River manager", filename: "upgrades", cx:-300, cy:-780,  required: 100000000000000000000000000, other: 12, description:"Make 100 septillion drops from rivers alone."},
	{sort: "buildingprod", name: "Collider instructor", filename: "upgrades", cx:0, cy:-840,  required: 1000000000000000000000000, other: 13, description:"Make 1 septillion drops from colliders alone."},
	{sort: "buildingprod", name: "Collider manager", filename: "upgrades", cx:-300, cy:-840,  required: 1000000000000000000000000000, other: 13, description:"Make 1 octillion drops from colliders alone."},
	
	{sort: "totalupgrades", name: "Upgrading started", filename: "upgrades", cx:-0, cy:-1380,  required: 1, other: 0, description:"Have one upgrade."},
	{sort: "totalupgrades", name: "Enhance further!", filename: "upgrades", cx:-60, cy:-1380,  required: 20, other: 0, description:"Have 20 upgrades."},
	{sort: "totalupgrades", name: "Upgrading has become quite a hobby.", filename: "upgrades", cx:-120, cy:-1380,  required: 50, other: 0, description:"Have 50 upgrades."},
	{sort: "totalupgrades", name: "Haven't you got enough upgrades?", filename: "upgrades", cx:-180, cy:-1380,  required: 100, other: 0, description:"Have 100 upgrades."},
	{sort: "totalupgrades", name: "Professional upgrader", filename: "upgrades", cx:-240, cy:-1380,  required: 150, other: 0, description:"Have 150 upgrades."},
	{sort: "totalupgrades", name: "Upgrading God", filename: "upgrades", cx:-300, cy:-1380,  required: 200, other: 0, description:"Have 200 upgrades."},
	
	{sort: "totalcloudclicks", name: "You clicked on a cloud!", filename: "upgrades", cx:-480, cy:-300,  required: 1, other: 0, description:"Click on one cloud."},
	{sort: "totalcloudclicks", name: "Keep clicking clouds!", filename: "upgrades", cx:-420, cy:-1320,  required: 10, other: 0, description:"Click on ten clouds."},
	{sort: "totalcloudclicks", name: "A century of clouds", filename: "upgrades", cx:-480, cy:-1320,  required: 100, other: 0, description:"Click on 100 clouds."},
	{sort: "totalcloudclicks", name: "Wow, a thousand clouds!", filename: "upgrades", cx:-360, cy:-1380,  required: 1000, other: 0, description:"Click on 1000 clouds."},
	{sort: "totalcloudclicks", name: "Where did all those clouds come from?", filename: "upgrades", cx:-420, cy:-1380,  required: 5000, other: 0, description:"Click on 5000 clouds."},
	{sort: "totalcloudclicks", name: "How long are you playing this game?!", filename: "upgrades", cx:-480, cy:-1380,  required: 10000, other: 0, description:"Click on 10,000 clouds."}
	
];

var _knowhowupgrades = [
	{id:1, sort:"unlock", name:"Unlock", filename: "upgrades", cx:-480 , cy:-360, cost:1, req1:0, req2:0, description:"Unlock knowhow"},
	
	{id:2, sort:"life", name:"Higher lifeforms: Seahorses", filename: "upgrades", cx:-240, cy:-1140, cost:30, req1:1, req2:0, description:"Get higher life forms: seahorses"},
	{id:3, sort:"life", name:"Higher lifeforms: Crustaceans", filename: "upgrades", cx:-60, cy:-1200, cost:40, req1:2, req2:0, description:"Get higher life forms: crustaceans"},
	{id:4, sort:"life", name:"Higher lifeforms: Octopi", filename: "upgrades", cx:-480, cy:-1200, cost:40, req1:2, req2:0, description:"Get higher life forms: octopi"},
	{id:5, sort:"life", name:"Higher lifeforms: Fish", filename: "upgrades", cx:-60, cy:-1260, cost:100, req1:3, req2:4, description:"Get higher life forms: fish"},
	{id:6, sort:"life", name:"Higher lifeforms: Tropical Fish", filename: "upgrades", cx:-480, cy:-1260, cost:500, req1:5, req2:0, description:"Get higher life forms: tropical fish"},
	{id:7, sort:"life", name:"Higher lifeforms: Scary Fish", filename: "upgrades", cx:-180, cy:-1320, cost:1000, req1:6, req2:0, description:"Get higher life forms: scary fish"},
	
	{id:8, sort:"cloud", name:"More Clouds", filename: "CloudSmall", cx:0, cy:0, cost:2000, req1:1, req2:0, description:"Clouds appear 5% more often"},
	{id:9, sort:"cloud", name:"Even More Clouds", filename: "CloudSmall", cx:0, cy:0, cost:3000, req1:8, req2:0, description:"Clouds appear 5% more often"},
	{id:10, sort:"cloud", name:"Longer Storms", filename: "CloudSmall", cx:0, cy:0, cost:4000, req1:9, req2:0, description:"Cloudeffects last 5% longer"},
	{id:11, sort:"cloud", name:"Even Longer Storms", filename: "CloudSmall", cx:0, cy:0, cost:5000, req1:10, req2:0, description:"Cloudeffects last 5% longer"},
	
	{id:12, sort:"alien", name:"Faster Diplomacy", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:1, req2:0, description:"Meetings with aliens happen 10 times faster."},
	{id:13, sort:"alien", name:"Faster Aliens", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:12, req2:0, description:"Aliens show up four times as fast."},
	{id:14, sort:"alien", name:"More Alien Drain", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:13, req2:0, description:"Aliens drain 1% more drops per second."},
	{id:15, sort:"alien", name:"Even More Alien Drain", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:14, req2:0, description:"Aliens drain 1% more drops per second."},
	
	{id:16, sort:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1100, req1:1, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:17, sort:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1200, req1:16, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:18, sort:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1300, req1:17, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:19, sort:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1400, req1:18, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},

	{id:20, sort:"collaboration", name:"Together we are stronger, tier I", filename: "upgrades", cx:-480, cy:-780, cost:1500, req1:5, req2:18, description:"Unlocks extra upgrades that let helpers work together and become stronger. Tier I"},
	{id:21, sort:"collaboration", name:"Together we are stronger, tier II", filename: "upgrades", cx:-480, cy:-840, cost:1500, req1:6, req2:19, description:"Unlocks extra upgrades that let helpers work together and become stronger. Tier II"},
	
	{id:22, sort:"poseidon", name:"Poseidon, God of the seas", filename: "poseidonsmall", cx:0, cy:0, cost:15, req1:1, req2:0, description:"Maybe Poseidon, God of the seas can help us?"},
	
	{id:23, sort:"offline", name:"Offline progress", filename: "clock", cx:-4, cy:-4, cost:1, req1:1, req2:0, description:"Offline progress: you now keep making drops at a rate of 40% of your cps for 24 hours while the game is closed. If aliens are draining drops they will also drain at a rate of 40% of their normal rate for 24 hours."},
	{id:24, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:15, req1:23, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 36 hours while the game is closed."},
	{id:25, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:15, req1:23, req2:0, description:"Offline progress: you now keep making drops at a rate of 50% while the game is closed."},
	{id:26, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:50, req1:24, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 48 hours while the game is closed."},
	{id:27, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:50, req1:25, req2:0, description:"Offline progress: you now keep making drops at a rate of 55% while the game is closed."},
	{id:28, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:500, req1:26, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 60 hours while the game is closed."},
	{id:29, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:500, req1:27, req2:0, description:"Offline progress: you now keep making drops at a rate of 60% while the game is closed."},
	{id:30, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:2500, req1:28, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 72 hours while the game is closed."},
	{id:31, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:2500, req1:29, req2:0, description:"Offline progress: you now keep making drops at a rate of 65% while the game is closed."},
	{id:32, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:10000, req1:30, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 84 hours while the game is closed."},
	{id:33, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:10000, req1:31, req2:0, description:"Offline progress: you now keep making drops at a rate of 70% while the game is closed."},
	{id:34, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:100000, req1:32, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 4 days while the game is closed."},
	{id:35, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:100000, req1:33, req2:0, description:"Offline progress: you now keep making drops at a rate of 75% while the game is closed."},
	{id:36, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:500000, req1:34, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 5 days while the game is closed."},
	{id:37, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:500000, req1:35, req2:0, description:"Offline progress: you now keep making drops at a rate of 80% while the game is closed."},
	{id:38, sort:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:1000000, req1:36, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 6 days while the game is closed."},
	{id:39, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:1000000, req1:37, req2:0, description:"Offline progress: you now keep making drops at a rate of 85% while the game is closed."},
	{id:40, sort:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:5000000, req1:38, req2:39, description:"Offline progress: you now keep making drops at a rate of 95% of your cps for 7 days while the game is closed."},
	
	{id:41, sort:"weatherstation", name:"Weatherstation", filename: "weatherstation", cx:0, cy:0, cost:20, req1:1, req2:0, description:"A weatherstation can help you with clouds."},
	
];


var _prayers = [
	{id:0, name:"noprayer", filename:"prayers", cx:-420, cy:0,description:"Select no prayer."},
	{id:1, name:"Brainpower", filename:"prayers", cx:0, cy:0, description:"Crazy scientists are 10% more powerful."},
	{id:2, name:"Clickpower", filename:"prayers", cx:-60, cy:0, description:"50% more clicking power."},
	{id:3, name:"Pipettelicious", filename:"prayers", cx:-120, cy:0, description:"Each pipette is 2% more powerful for every helper you have"},
	{id:4, name:"Turbo", filename:"prayers", cx:-180, cy:0, description:"Chance of drops per second x30 for 60 seconds when you click on a cloud."},
	{id:5, name:"Brainwaves", filename:"prayers", cx:-240, cy:0, description:"Crazy scientists are 20% more powerful."},
	{id:6, name:"Discount upgrade", filename:"prayers", cx:-300, cy:0, description:"All upgrades are 5% cheaper."},
	{id:7, name:"Discount helper", filename:"prayers", cx:-360, cy:0, description:"All helpers are 5% cheaper."},
	{id:8, name:"Bonus", filename:"prayers", cx:0, cy:-60, description:"10% bonus drops per second"},
	{id:9, name:"Bad weather", filename:"prayers", cx:-60, cy:-60, description:"Clouds show up 10% more often."},
	{id:10, name:"Poseidon Wrath", filename:"prayers", cx:-120, cy:-60, description:"Chance of clicking power times 1111 for 11 seconds when you click on a cloud."},
	{id:11, name:"Heavy rain", filename:"prayers", cx:-180, cy:-60, description:"Clouds give 20% more drops."},
	{id:12, name:"Big bonus", filename:"prayers", cx:-240, cy:-60, description:"20% bonus drops per second."},
	{id:13, name:"Braingrowth", filename:"prayers", cx:-300, cy:-60, description:"Crazy scientists are 40% more powerful"},
	{id:14, name:"Enormous bonus", filename:"prayers", cx:-360, cy:-60, description:"40% bonus drops per second."},
	{id:15, name:"Double", filename:"prayers", cx:-420, cy:-60, description:"Double your drops per second."},
];


function Beautify(value){
	if (Game.numberOption == 0){
		var power = [
				'',
				'',
				' million',
				' billion',
				' trillion',
				' quadrillion',
				' quintillion',
				' sextillion',
				' septillion',
				' octillion',
				' nonillion',
				' decillion',
				' undecillion',
				' duodecillion',
				' tredecillion',
				' quattuordecillion',
				' quindecillion'
			];
		
		var valuestr = value.toString();
		var isE = valuestr.indexOf('e+');
		if (isE!=-1){
			var varray = valuestr.split('e+');
			var partone = varray[0];
			partone = partone.replace('.', '');
			var parttwo = varray[1];
			var parttwonum = parseInt(parttwo)+1;
			var result = partone;
			for(var x = partone.length; x<parttwonum; x++){
				result += "0";
			}
			valuestr=result;
		}

		
		var pos = valuestr.indexOf('.');
		var rest = "";
		if (pos!=-1){
			var valuearray = valuestr.split('.');
			valuestr = valuearray[0];
			rest = valuearray[1];
		}
		
		if(value<1000000){
			return numberWithCommas(value);
		}
		else {
			
			
			var numberOfDigits = valuestr.length;
			
			var inThree = Math.floor((numberOfDigits-1)/3);

			var revvaluestr = reverseAddDots(valuestr);
			
			var returnstrtot = reverse(revvaluestr);
			if (returnstrtot[0]=='.') {
				returnstrtot = returnstrtot.substring(1);
			}
			
			var returnstr = "";
			var numDots = 0;
			for (var i=0; i<returnstrtot.length; i++){
				if (returnstrtot[i]=="."){
					numDots++;
				}
				if (numDots<2){
					returnstr = returnstr + returnstrtot[i];
					
				}
			}
			if (inThree<=16){
				returnstr = returnstr + " " + power[inThree];
				return returnstr;
			}else {
				returnstr="Infinity";
				return returnstr;
			}
			
		}
	}else if (Game.numberOption == 1){
		value = parseFloat(value);
		if(value<1000000){
			return numberWithCommas(value);
		}else{
			var returnstr = value.toExponential(3);
			return returnstr;
		}
	
	}else {
		value = parseFloat(value);
		if(value<1000000){
			return numberWithCommas(value);
		}
		else {
			var returnstr = value.toExponential(15);
			return returnstr;
		}
	}
	
}
	
function reverseAddDots(s) {

	var o = "";
	var x = 0;
	for (var i =s.length-1; i>=0; i--){
		o += s[i];
		x++;
		if (x%3==0){
			o+='.';
		}
	}
	
	return o;
}

function reverseAddCommas(s) {

	var o = "";
	var x = 0;
	for (var i =s.length-1; i>=0; i--){
		o += s[i];
		x++;
		if (x%3==0){
			o+=',';
		}
	}
	
	return o;
}

function reverse(s){
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

if (document.addEventListener !== "undefined") {
  // Not IE
  document.addEventListener('click', checkSelection, false);
} else {
  // IE
  document.attachEvent('onclick', checkSelection);
}

function checkSelection() {
    var sel = {};
    if (window.getSelection) {
        // Mozilla
        sel = window.getSelection();
    } else if (document.selection) {
        // IE
        sel = document.selection.createRange();
    }

    // Mozilla
    if (sel.rangeCount) {
        sel.removeAllRanges();
        return;
    }

    // IE
    if (sel.text > '') {
        document.selection.empty();
        return;
    }
}


document.addEventListener("mousemove",getMouseXY);
var tempX = 0
var tempY = 0
function getMouseXY(e) {
 
    tempX = e.pageX
    tempY = e.pageY

  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}  

  return true
}

function calc(x){
	var y = Math.pow(x, 12);
	return y;
}




// Initialize the Game
Game.init(_buildings, _upgrades, _achievements, _knowhowupgrades, _prayers);

window.onbeforeunload = function (e) {
	
	if(Game.reload==0){
			
		e = e || window.event;

		// For IE and Firefox prior to version 4
		if (e) {
			e.returnValue = 'Sure?';
		}

		// For Safari
		return 'Sure?';
	}
};


window.addEventListener("resize", function() {
    Game.wInnerWidth = window.innerWidth;
	var w = window.innerWidth;
	if (w>1200){
		
		Game.statsContainer.css({'position':'relative','float':'left', 'left':'auto', 'right':'auto'});
	}else {
		if(Game.statsopen==0){
			Game.statsContainer.css({'position':'absolute', 'left':'100%', 'right':'auto'});
		}else {
			Game.statsContainer.css({'position':'absolute', 'left':'10%', 'right':'auto'});
		}
	}
	
	var dif = -((430-w)/100*75)+"px";
			if (w<430){
				$(dropbackgrounda).css({'margin-left':dif});
				$(dropbackgroundb).css({'margin-left':dif});
				$(dropbackgroundc).css({'margin-left':dif});
			}else {
				$(dropbackgrounda).css({'margin-left':'auto'});
				$(dropbackgroundb).css({'margin-left':'auto'});
				$(dropbackgroundc).css({'margin-left':'auto'});
			}
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + " hours " + minutes + " minutes and " + seconds + " seconds";
    }