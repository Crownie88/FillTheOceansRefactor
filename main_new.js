"use strict";

var msie;
msie = window.document.documentMode;

if (typeof(msie)=="number"){
	var htmltxt = "<h1 style='color:#ffffff'>Fill The Oceans</h1><p style='color:#ffffff'>Fill the oceans is a game that uses CSS3 and advanced javascript that is not supported by Internet Explorer.</p>";
	htmltxt += "<p style='color:#ffffff'>Fill The Oceans should work with all recent major other browsers like: Chrome, Firefox, Opera and Edge</p> <p  style='color:#ffffff'>Sorry for this inconvenience.</p>";
	document.getElementById("body").innerHTML=htmltxt;
}

$('.UseHover').hover(function(){
	if (!$(this).hasClass('hoverdrop')){
		$(this).addClass('hoverdrop');
	}
}, function(){
	$(this).removeClass('dropover');
	$(this).removeClass('hoverdrop')
	if(!$(this).hasClass('outdrop')){
		$(this).addClass('outdrop');
		window.setTimeout(function(){$(this).removeClass('outdrop'); $(this).removeClass('dropover');}, 1000);
	}
});

$('#progressbarcontainermtnexpl').hover(function(){
	$('#popover').html('<table><tr><td><p class="popovertitle">Mtn Eew: '+Game.achievementsPerc+'%</p><p>The percentage of achievements you get is the percentage of your Mtn Eew</p><p>The more Mtn Eew you\'ve got the better the crazy scientists work. All crazyscientists boost your drops per second with an extra '+Game.crazyscientistsboost+'%</p></td></tr></table>');
	var w = $('#popover').width()+40; 
	var posX = tempX-w;
	var posY = tempY;
	var csspos = {'top':posY, 'left':posX};
	$('#popover').css(csspos).show();
},function() {
	// on mouseout
	$('#popover').css({'display':'none'});
});

var PoseidonMiniGame = {
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
		
		//Poseidon DOM start
		templeImage: undefined,
		poseidonImage: undefined,
		poseidonStart: undefined,
		poseidonEnd: undefined,
		poseidonStartCloseButton: undefined,
		poseidonStartStartButton: undefined,
		poseidonEndCloseButton: undefined,
		poseidonEndStartButton: undefined,
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
		//Poseidon DOM end

		//Poseidon init function
		init: function(){
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

			// Minigame poseidon
			this.poseidonImage.click(function(){
				if(self.poseidonStarted==1){
					self.poseidonMinigame.show("slow");
				}else if (self.poseidonStarted==0){
					self.poseidonStart.toggle("slow");
				}else{
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
				
			this.pFoodImage.click(function(){
				self._pFoodClick();
			});
				
			this.templeImage.click(function(){
				self._templeClick();
			});
				
			this.pFoodBarnImage.click(function(){
				self._pFoodBarnClick();
			});
				
			this.pWoodImage.click(function(){
				self._pWoodClick();
			});
				
			this.pWoodBarnImage.click(function(){
				self._pWoodBarnClick();
			});
				
			this.pStoneImage.click(function(){
				self._pStoneClick();
			});
				
			this.pStoneBarnImage.click(function(){
				self._pStoneBarnClick();
			});
				
			this.pTentImage.click(function(){
				self._pTentClick();
			});
			
			this.pWoodenhouseImage.click(function(){
				self._pWoodenhouseClick();
			});
			
			this.pStonehouseImage.click(function(){
				self._pStonehouseClick();
			});
				
			this.pWorkerImage.click(function(){
				self._pWorkerClick();
			});
				
			this.pFarmerMinButton.click(function(){
				if(self.pFarmerTotal>=1){
					self.pFarmerTotal--;
					self._updateWorkerDetails();
				}
			});
				
			this.pFarmerPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pFarmerTotal++;
					self._updateWorkerDetails();
				}
			});
				
			this.pWoodcutterMinButton.click(function(){
				if(self.pWoodcutterTotal>=1){
					self.pWoodcutterTotal--;
					self._updateWorkerDetails();
				}
			});
				
			this.pWoodcutterPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pWoodcutterTotal++;
					self._updateWorkerDetails();
				}
			});
				
			this.pStonecutterMinButton.click(function(){
				if(self.pStonecutterTotal>=1){
					self.pStonecutterTotal--;
					self._updateWorkerDetails();
				}
			});
				
			this.pStonecutterPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pStonecutterTotal++;
					self._updateWorkerDetails();
				}
			});
				
			this.pBuilderMinButton.click(function(){
				if(self.pBuildersIdle>=1){
					self.pBuildersIdle--;
					self._updateWorkerDetails();
				}
			});
				
			this.pBuilderPlusButton.click(function(){
				if(self.pWorkerIdle>=1){
					self.pBuildersIdle++;
					self._updateWorkerDetails();
				}
			});
				
			this.pTempleImage.click(function(){
				self._pTempleClick();
			});

		},

		_updateWorkerDetails: function(){
			var tmpIdleWorkers = this.pWorkerTotal;
			tmpIdleWorkers -= self.pFarmerTotal;
			self.pFarmerStat.text(self.pFarmerTotal);
			tmpIdleWorkers -= self.pWoodcutterTotal;
			self.pWoodcutterStat.text(self.pWoodcutterTotal);
			tmpIdleWorkers -= self.pStonecutterTotal;
			self.pWorkerIdleStat.text(self.pStonecutterTotal);
			tmpIdleWorkers -= (self.pBuildersIdle+self.pBuildersWorking);
			self.pBuildersIdleStat.text(self.pBuildersIdle);
			self.pBuilderStat.text(self.pBuildersIdle+self.pBuildersWorking);
			self.pBuildersIdle = tmpIdleWorkers;
			self.pWorkerIdleStat.text(self.pBuildersIdle);
		},

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
};

var Game = {
		version:"0.1.11",
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

		buildings: [],
		upgrades: [],
		upgrades_sorted: [],
		achievements: [],
		knowhowupgrades: [],
		prayers: [],
		
		channel_max: 10,	// number of channels
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
		Minigame: undefined,
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
								$('#arrowsdiv38'),$('#arrowsdiv39'),this.arrowsArray40];
			
			
			this.dragstarposx = this.knowhowDrag.position().left;
			this.dragstarposy = this.knowhowDrag.position().top;

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

			//Is this even used???
			this.button.hover(function(){
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

			this.prayerSelectDiv.draggable();
			this.poseidonSacrifice.draggable();
			
			this.prayerSelectDivCloseButton.click(function(){
				self.prayerSelectDiv.hide("slow");
			});
			
			this.poseidonSacrificeCloseButton.click(function(){
				self.poseidonSacrifice.hide("slow");
			});
			
			this.sacrificeDiv.click(function(){
				self._sacrificeClick();
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
			
			self.handlesave = window.setInterval(function() {self._save();}, 60000);

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
			self.Minigame = PoseidonMiniGame;
			self.Minigame.init();
		},//end INIT

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
		sacrificeArray: [
			{id: 0, building: -1, amount: 1000000, amountText: "1 million drops", poseidonText: "will get a", grantsText: "little less grumpy.", effect: ""},
			{id: 1, building: -1, amount: 2000000, amountText: "2 million drops", poseidonText: "will get a", grantsText: "little bit more favorable.", effect: ""},
			{id: 2, building: -1, amount: 4000000, amountText: "4 million drops", poseidonText: "is getting", grantsText: "happy with us.", effect: ""},
			{id: 3, building: -1, amount: 8000000, amountText: "8 million drops", poseidonText: "is considering", grantsText: "helping us.", effect: ""},
			{id: 4, building: -1, amount: 16000000, amountText: "16 million drops", poseidonText: "grants you", grantsText: "Brainpower prayer", effect: "Crazy scientists are 10% more powerful"},
			{id: 5, building: 0, amount: 100, amountText: "100 Helping hands", poseidonText: "grants you", grantsText: "Clickpower prayer", effect: "50% more clicking power"},
			{id: 6, building: 1, amount: 100, amountText: "100 Pipettes", poseidonText: "grants you", grantsText: "Pipettelicious", effect: "Each pipette is 2% more powerful for every helper you have"},
			{id: 7, building: 2, amount: 100, amountText: "100 Air dryers", poseidonText: "grants you", grantsText: "Turbo prayer", effect: "Chance of drops per second x30 for 60 seconds when you click on a cloud."},
			{id: 8, building: 3, amount: 100, amountText: "100 Buckets", poseidonText: "grants you", grantsText: "Brainwaves prayer", effect: "Crazy scientists are 20% more powerful."},
			{id: 9, building: 4, amount: 100, amountText: "100 Raindances", poseidonText: "grants you", grantsText: "Discount upgrade prayer", effect: "All upgrades are 5% cheaper."},
			{id: 10, building: 5, amount: 100, amountText: "100 Faucets", poseidonText: "grants you", grantsText: "Discount helper prayer", effect: "All helpers are 5% cheaper."},
			{id: 11, building: 6, amount: 100, amountText: "100 Garden hoses", poseidonText: "grants you", grantsText: "Bonus prayer", effect: "10% bonus drops per second."},
			{id: 12, building: 7, amount: 100, amountText: "100 Trucks", poseidonText: "grants you", grantsText: "Bad weather prayer", effect: "Clouds show up 10% more often."},
			{id: 13, building: 8, amount: 100, amountText: "100 Fire hoses", poseidonText: "grants you", grantsText: "Poseidon Wrath prayer", effect: "Chance of clicking power times 1111 for 11 seconds when you click on a cloud."},
			{id: 14, building: 9, amount: 100, amountText: "100 Ice mines", poseidonText: "grants you", grantsText: "Heavy rain prayer", effect: "Clouds give 20% more drops."},
			{id: 15, building: 10, amount: 100, amountText: "100 Space ships", poseidonText: "grants you", grantsText: "Big bonus prayer", effect: "20% bonus drops per second."},
			{id: 16, building: 11, amount: 100, amountText: "100 Worm holes", poseidonText: "grants you", grantsText: "Braingrowth prayer", effect: "Crazy scientists are 40% more powerful"},
			{id: 17, building: 12, amount: 100, amountText: "100 Rivers", poseidonText: "grants you", grantsText: "Enormous bonus prayer", effect: "40% bonus drops per second."},
			{id: 18, building: 13, amount: 100, amountText: "100 Colliders", poseidonText: "grants you", grantsText: "Double prayer", effect: "Double your drops per second."},
			{id: 19, building: 14, amount: 0, amountText: "You have sacrificed enough!", poseidonText: "", grantsText: "", effect: ""},
		],
		_scarificeCheck:function(){
			var ToSacrifice = this.sacrificeArray[this.sacrificeLevel];
			this.sacrificeDiv.removeClass();
			if (ToSacrifice.building < 0 && this.drops_in_bank < ToSacrifice.amount) || (this.buildings[ToSacrifice.building].quantity < ToSacrifice.amount){
				this.sacrificeDiv.addClass('inactive');
				this.sacrificeDivActive=0;
			}else{
				this.sacrificeDiv.addClass('active');
				this.sacrificeDivActive=1;
			}
		},
		_changeSacrificeText: function(){
			var sl = this.sacrificeLevel;
			var text = [
				'<p class="sacrificetext">Sacrifice<br />',
				'',//Replace with amountText
				'</p><hr style="width:20%" /><p class="sacrificeexpl">',
				'',//Replace with Poseidon + poseidonText including ":" and linebreak if sl > 3
				'',//Replace with grantsText + linebreak if sl > 3
				'',//Replace with effect
				'</p>'];
			var ToSacrifice = this.sacrificeArray[sl];
			if (sl < 19){
				text[1] = ToSacrifice.amountText;
				text[3] = "Poseidon " + ToSacrifice.poseidonText + ((sl > 3) ? ":<br />" : "");
				text[4] = ToSacrifice.grantsText + ((sl > 3) ? "<br />" : "");
				text[5] = ToSacrifice.effect;
			}
			this.sacrificeDiv.html(text.join());
		},
		_sacrificeClick: function(){
			var sl = this.sacrificeLevel;
			var ToSacrifice = this.sacrificeArray[sl];
			if (ToSacrifice.building < 0 && this.drops_in_bank >= ToSacrifice.amount){
				this.sacrificeLevel++;
				this._changeSacrificeText();
				this.drops_in_bank =- ToSacrifice.amount;
				this._scarificeCheck();
			}else if (ToSacrifice.building >= 0 && this.buildings[ToSacrifice.building].quantity >= ToSacrifice.amount){
				this.sacrificeLevel++;
				this._changeSacrificeText();
				this.buildings[ToSacrifice.building].quantity =- ToSacrifice.amount;
				this._scarificeCheck();
			}
		},
}
