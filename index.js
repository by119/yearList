// var host = 'http://cg.test.ppmiao.cn'; //----------
// var host = 'http://cg.pro.ppmiao.cn'; //----------

var host = 'https://sailsact.ppmiao.com';   //-----------
// var host = 'http://192.168.1.254:2019';
// var host = 'http://118.178.232.193:2019';
var versionName = GetQueryString("versionName");
var token = GetQueryString("data");
var version = GetQueryString("version");
var mobile = GetQueryString("mobile");
if (versionName === null) {
	if (version != null) {
		versionName = version
	} else {
		versionName = versionName
	}
}
// alert(mobile);
// 2
var secondSlide = $(".second-slide");
var page2_t_0 = $(".page2_t_0");

// 3
var thirdSlide = $(".third-slide");
var page3_0 = $(".page3_0");
var page3_1 = $(".page3_1");
var page3_0_t_0 = $(".page3_0_t_0");
var page3_0_t_3 = $(".page3_0_t_3");
var invest_btn = $(".invest_btn");
// 4
var fourthSlide = $(".fourth-slide");
var page4_t_1 = $(".page4_t_1");
var page4_t_2 = $(".page4_t_2");
// 5
var fifthSlide = $(".fifth-slide");
var page5_01_0 = $(".page5_01_0");
var page5_01_1 = $(".page5_01_1");
var reward = $(".reward");
var page5_tip = $(".page5_tip");
var page5_gift = $(".page5_gift");
var page5_bg = $(".page5_bg");
// 6
var sixthSlide = $(".sixth-slide");
var page6_t_2 = $(".page6_t_2");
var page6_vip = $(".page6_vip");
var page6_v_1 = $(".page6_v_1");
var page6_v_2 = $(".page6_v_2");
var page6_v_3 = $(".page6_v_3");
var page6_v_4 = $(".page6_v_4");
var page6_v_5 = $(".page6_v_5");
// 7
var seventhSlide = $(".seventh-slide");
var page7_0 = $(".page7_0");
var page7_1 = $(".page7_1");
var invist_btn = $(".invist_btn");
var timer0 = setTimeout("$('.first-slide').addClass('current');", 10);

// 8
var eighthSlide = $(".eighth-slide");
var page8_01_0 = $(".page8_01_0"); // 未使用福利券
var page8_01_1 = $(".page8_01_1"); // 已使用福利券
// 9
var page9_ctrl0 = $(".page9_ctrl0"); // 加息券控
var page9_ctrl1 = $(".page9_ctrl1"); // 红包控
var page9_ctrl2 = $(".page9_ctrl2"); // 理财高手
var page9_ctrl3 = $(".page9_ctrl3"); // 短标控
var page9_ctrl4 = $(".page9_ctrl4"); // 长标控
var page9_ctrl5 = $(".page9_ctrl5"); // 土豪
var page9_ctrl6 = $(".page9_ctrl6"); // 新人
var page9_ctrl7 = $(".page9_ctrl7"); // 夜猫
// 9
var ninthSlide = $(".ninth-slide");
// 10
var tenthSlide = $(".tenth-slide");
var page10_01_00 = $(".page10_01_00"); //老用户战斗力
var page10_01_01 = $(".page10_01_01"); //新人战斗力
var invest_btn2 = $(".invest_btn2"); //立即投资
var invist_btn2 = $(".invist_btn2"); //立即邀请

// 1
// 2
var friendSort = 0;

// 3
var joinDays = 0; // 注册至今天数
var firestInvestCash = 0; //首次投资金额
// 4
var totalInvestCash = 0; //累计投资
var morePercent = 0; //累计投资百分比
// 5
var totalCash = 0; // 累计收益
var moreOther = 0; //累计收益百分比
var rewardText = ""; //获得奖品
var page5Tip = ""; //文案

// 6
var joinVip = 0; //注册至今天数
var vipLevel = 0; //会员等级
// 7
var friendCount = 0; // 邀请好友数量
var friendInvestCash = 0; //好友累计收益
//8
var welfare0Count = 0; //其他用户平均增加收益
var welfare1Count = 0; // 用户累计使用的福利券价值

//10
var integral = 0; //累计积分
var investTimes = 0; //累计投资次数
var averageTimes = 0; //多少天投资一次
var totalDueInterest = 0; //累计收益
var topAmount = 0; //最高单笔投资金额
var longInvestDays = 0; //最长项目期限

// 邀友
var title = '您的好友向你发出淘金邀请函';
// var shareUrl = "http://testing.ppmiao.com/?c=Activity&a=invite2&mobile=MTM3MzgwNzE1MjE=&from=singlemessage&isappinstalled=0"; //--------
// var shareUrl = "http://testing.ppmiao.com/?c=Activity&a=invite2"; //--------
var shareUrl = "https://www.ppmiao.com/?c=Activity&a=invite2"; //--------

var content = '快来看看你的淘金值有多少！';
var imgUrl = "https://image.ppmiao.com/H5picture/common/imaUrl.png";
var str = '';

var img10 = $(".img10");
var htmlFont = $("html").css('font-size');
var htmlFontSize = htmlFont.slice(0, htmlFont.length - 2);
var height1 = (window.innerHeight) / htmlFontSize - 10;
var scale = window.innerHeight / window.innerWidth;
if(scale<1.6){
	htmlFontSize =htmlFontSize-3;
	$("html").css({fontSize:htmlFontSize + 'px'});
	$(".page1_road").css({width:window.innerWidth/htmlFontSize + 'rem'});
}
img10.css({height: height1 + 'rem'})

var music = $(".music").get(0);
var musicbtn = $(".musicbtn");
$(document).ready(function() {
	getUserphp();
});

document.addEventListener("touchmove", function(e) {
	var event = e || window.event;
	if(e.preventDefault) {
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}, false); //禁止页面滑动
//数字变化
var options = {
	useEasing: false,
	useGrouping: false,
	separator: '',
	decimal: '.'
};
var swiper = new Swiper('.swiper-container', {
	observer: true,
	observeParents: true,
	initialSlide: 0,
	direction: 'vertical',
	height: window.innerHeight,
	nextButton: '.swiper-button-next',
	// 如果需要滚动条
	scrollbar: null,
	onSlideChangeEnd: function(swiper) {
		var index = swiper.activeIndex;
		if ($('.arr').hasClass('swiper-button-disabled')) {
			$(".swiper-button-next").hide();
		} else {
			$(".swiper-button-next").show();
		}
		$('.swiper-slide').removeClass('current').eq(index).addClass('current');

		if (secondSlide.hasClass('current')) {
			var friend = new CountUp('friends', 0, friendSort, 0, 1.6, options);
			if (!friend.error) {
				friend.start();
			} else {
				$('#friends').html(0);
			}
		}
		if (thirdSlide.hasClass('current')) {
			var day = new CountUp('joindays', 0, joinDays, 0, 1.6, options);
			if (!day.error) {
				day.start();
			} else {
				$('#joindays').html(0);
			}
			var cash = new CountUp('firestinvestcash', 0, firestInvestCash, 0, 2.5, options);
			if (!cash.error) {
				cash.start();
			} else {
				$('#firestinvestcash').html(0);
			}
		}
		if (fourthSlide.hasClass('current')) {
			var totalInvest = new CountUp('totalinvest', 0, totalInvestCash, 0, 1.3, options);
			if (!totalInvest.error) {
				totalInvest.start();
			} else {
				$('#totalinvest').html(0);
			}
			var morepercent = new CountUp('morepercent', 0, morePercent, 1, 1.3, options);
			if (!morepercent.error) {
				morepercent.start();
			} else {
				$('#morepercent').html(0);
			}
		}
		if (fifthSlide.hasClass('current')) {
			var total = new CountUp('total', 0, totalCash, 2, 1.3, options);
			if (!total.error) {
				total.start();
			} else {
				$('#total').html(0);
			}
			var more = new CountUp('moreother', 0, moreOther, 1, 1.6, options);
			if (!more.error) {
				more.start();
			} else {
				$('#moreother').html(0);
			}
		}
		if (sixthSlide.hasClass('current')) {
			var joinvip = new CountUp('joinvip', 0, joinVip, 0, 1.3, options);
			if (!joinvip.error) {
				joinvip.start();
			} else {
				$('#joinvip').html(0);
			}
			var viplevel = new CountUp('viplevel', 0, vipLevel, 0, 1.3, options);
			if (!viplevel.error) {
				viplevel.start();
			} else {
				$('#viplevel').html(0);
			}
		}
		if (seventhSlide.hasClass('current')) {
			var friend1 = new CountUp('friendcount1', 0, friendCount, 0, 1.6, options);
			if (!friend1.error) {
				friend1.start();
			} else {
				$('#friendcount1').html(0);
			}
			var friend2 = new CountUp('friendcount2', 0, friendCount, 0, 1.9, options);
			if (!friend2.error) {
				friend2.start();
			} else {
				$('#friendcount2').html(0);
			}
			var friendInvest = new CountUp('friendinvest', 0, friendInvestCash, 2, 2.2, options);
			if (!friendInvest.error) {
				friendInvest.start();
			} else {
				$('#friendinvest').html(0);
			}
		}
		if (eighthSlide.hasClass('current')) {
			var per = new CountUp('welfare_per', 0, 95, 1, 1.3, options);
			if (!per.error) {
				per.start();
			} else {
				$('#welfare_per').html(0);
			}
			var welfare0 = new CountUp('welfare0', 0, welfare0Count, 2, 1.6, options);
			if (!welfare0.error) {
				welfare0.start();
			} else {
				$('#welfare0').html(0);
			}
			var welfare1 = new CountUp('welfare1', 0, welfare1Count, 2, 1.6, options);
			if (!welfare1.error) {
				welfare1.start();
			} else {
				$('#welfare1').html(0);
			}
		}
		if (tenthSlide.hasClass('current')) {
			var integral0 = new CountUp('integral0', 0, integral, 0, 1.3, options);
			if (!integral0.error) {
				integral0.start();
			} else {
				$('#integral0').html(0);
			}
			//累计获得的积分
			var integral1 = new CountUp('integral1', 0, integral, 0, 1.3, options);
			if (!integral1.error) {
				integral1.start();
			} else {
				$('#integral1').html(0);
			}
			//累计投资次数
			var invest_time = new CountUp('invest_times', 0, investTimes, 0, 1.3, options);
			if (!invest_time.error) {
				invest_time.start();
			} else {
				$('#invest_times').html(0);
			}
			//多少天投资一次
			var average_time = new CountUp('average_times', 0, averageTimes, 0, 1.3, options);
			if (!average_time.error) {
				average_time.start();
			} else {
				$('#average_times').html(0);
			}
			//累计收益
			var total_due_interest = new CountUp('total_due_interest', 0, totalDueInterest, 2, 1.3, options);
			if (!total_due_interest.error) {
				total_due_interest.start();
			} else {
				$('#total_due_interest').html(0);
			}
			//最高单笔投资金额
			var top_amount = new CountUp('top_amount', 0, topAmount, 0, 1.3, options);
			if (!top_amount.error) {
				top_amount.start();
			} else {
				$('#top_amount').html(0);
			}
			//最长项目期限
			var long_invest_days = new CountUp('long_invest_days', 0, longInvestDays, 0, 1.3, options);
			if (!long_invest_days.error) {
				long_invest_days.start();
			} else {
				$('#long_invest_days').html(0);
			}
		}
	}
});

function getUserphp() {
	$.ajax({
		url: host + '/getYearListphp',
		type: 'post',
		data: {
			mobile: mobile
		},
		dataType: 'json',
		success: function(response) {
			// console.log(response);
			var data = response.data;
			if (data != undefined && data != null && data != '') {
				// alert(data.investmentInfo.first_invest_time);
				// 2
				page2_t_0.html(data.userInfo.add_time);
				friendSort = data.userInfo.register_ranking;
				// 3
				var first_invest_time = data.investmentInfo.first_invest_time; //首次投资时间
				// 通过首次投资时间判断用户是否投资过
				if (first_invest_time != undefined && first_invest_time != null && first_invest_time != '') {
					// 投资过
					page3_0.css({display: 'block'});
					page3_1.css({display: 'none'});
					page3_0_t_0.html(data.userInfo.current_time); // 当前时间
					joinDays = data.userInfo.total_days; //正式踏上淘金之路
					page3_0_t_3.html(first_invest_time); // 首次投资日期
					firestInvestCash = data.investmentInfo.first_due_amount; // 首次投资金额
					if (firestInvestCash <= 0) {
						swiper.removeSlide([3,4,5,6,7,8]);//移除指定页
					}
					//10
					page10_01_00.css({display: 'none'});
					page10_01_01.css({display: 'block'});
				} else {
					// 没有投资过
					page3_0.css({display: 'none'});
					page3_1.css({display: 'block'});
					//10
					page10_01_00.css({display: 'block'});
					page10_01_01.css({display: 'none'});
					swiper.removeSlide([3,4,5,6,7,8]);//移除指定页
				}
				//4
				totalInvestCash = data.investmentInfo.total_due_amount; //累计投资
				if (totalInvestCash < 300000) {
					page4_t_1.html('你与【淘金能手】');
					page4_t_2.html('的称号只差 一步啦!');
				}
				morePercent = data.investmentInfo.override_amount; //超过多少投资
				//5
				totalCash = data.investmentInfo.total_due_interest; //累计收益
				// 根据累计收益判断
				if (totalCash < 100) {
					page5_01_0.css({display: 'none'});
					page5_01_1.css({display: 'block'});
					page5_gift.css({backgroundImage: 'unset'});
					page5_bg.css({backgroundImage: 'url(./images/page5_fz.png)'});
				} else {
					page5_01_0.css({display: 'block'});
					page5_01_1.css({display: 'none'});
					moreOther = data.investmentInfo.override_interest;
					if (totalCash >= 100 && totalCash < 1000) {
						rewardText = '一个平板电脑';
						page5Tip = '新电脑?小意思~';
						page5_gift.css({backgroundImage: 'url(./images/page5_pad.png)'});
						page5_bg.css({backgroundImage: 'unset'});
					} else if (totalCash >= 1000 && totalCash < 6000) {
						rewardText = '一个4K液晶电视';
						page5Tip = '厉害厉害，很会赚钱嘛!';
						page5_gift.css({backgroundImage: 'url(./images/page5_tv.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_tv_bg.png)'});
					} else if (totalCash >= 6000 && totalCash < 30000) {
						rewardText = '一次北极光奇幻旅程';
						page5Tip = '乘邮轮穿越极光之门吧~';
						page5_gift.css({backgroundImage: 'url(./images/page5_ship.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_ship_bg.png)'});
					} else if (totalCash >= 30000 && totalCash < 100000) {
						rewardText = '一块欧米伽名表';
						page5Tip = '举手投足之间的帅气!';
						page5_gift.css({backgroundImage: 'url(./images/page5_watch.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_watch_bg.png)'});
					} else if (totalCash >= 100000 && totalCash < 250000) {
						rewardText = '一辆minicooper';
						page5Tip = '投资达人与宝马，相得益彰!';
						page5_gift.css({backgroundImage: 'url(./images/page5_bmw.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_fz.png)'});
					} else if (totalCash >= 250000 && totalCash < 500000) {
						rewardText = '一辆奔弛';
						page5Tip = '投资界的大神，我等膜拜~';
						page5_gift.css({backgroundImage: 'url(./images/page5_benz.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_fz.png)'});
					} else if (totalCash >= 500000) {
						rewardText = '一辆法拉利';
						page5Tip = '你，就是成功!';
						page5_gift.css({backgroundImage: 'url(./images/page5_ferrari.png)'});
						page5_bg.css({backgroundImage: 'url(./images/page5_fz.png)'});
					}
					reward.html(rewardText);
					page5_tip.html(page5Tip);
				}
				//6
				joinVip = data.userInfo.total_days; //正式踏上淘金之路
				vipLevel = data.vipInfo.grade; //vip等级
				if (vipLevel >= 1) {
					page6_v_1.addClass('page6_v');
					page6_vip.css({backgroundImage: 'url("./images/page6_1.png")'});
					page6_t_2.html('路程任遥远，继续努力哦!');
				}
				if (vipLevel >= 2) {
					page6_v_2.addClass('page6_v');
					page6_vip.css({backgroundImage: 'url("./images/page6_2.png")'});

				}
				if (vipLevel >= 3) {
					page6_v_3.addClass('page6_v');
					page6_vip.css({backgroundImage: 'url("./images/page6_3.png")'});
					page6_t_2.html('继续努力，勇攀最高峰!');
				}
				if (vipLevel >= 4) {
					page6_v_4.addClass('page6_v');
					page6_vip.css({backgroundImage: 'url("./images/page6_4.png")'});
				}
				if (vipLevel >= 5) {
					page6_v_5.addClass('page6_v');
					page6_vip.css({backgroundImage: 'url("./images/page6_5.png")'});
				}
				if (vipLevel >= 7) {
					page6_t_2.html('会当凌绝顶，一览众山小!');
				}
				//7
				friendCount = data.inviteInfo.invite_numbers; //邀请人数
				if (friendCount > 0) {
					page7_0.css({display: 'block'});
					page7_1.css({display: 'none'});
					friendInvestCash = data.inviteInfo.total_inv_due_interest; //邀请好友帮好友赚的钱
				} else {
					page7_0.css({display: 'none'});
					page7_1.css({display: 'block'});
				}
				// 8
				var myWelfare = data.welfareInfo.total_welfare_due_interest; // 用户使用红包和加息券 获得的额外收益总和
				if (myWelfare > 0) {
					// 已使用福利券
					page8_01_0.css({display: 'none'});
					page8_01_1.css({display: 'block'});
					welfare1Count = myWelfare;
				} else {
					// 未使用福利券
					page8_01_0.css({display: 'block'});
					page8_01_1.css({display: 'none'});
					welfare0Count = data.welfareInfo.average_due_interest;
				}
				// 9
				var ctrls = data.labelInfo;
				var ctrl0 = ctrls.voucher; // 加息券控
				var ctrl1 = ctrls.red_envelopes; // 红包控
				var ctrl2 = ctrls.finance; // 理财高手
				var ctrl3 = ctrls.short_bid; // 短标控
				var ctrl4 = ctrls.long_bid; // 长标控
				var ctrl5 = ctrls.tu_hao; // 土豪
				var ctrl6 = ctrls.new_people; // 新人
				var ctrl7 = ctrls.night_owl; // 夜猫
				ctrlShow(ctrl0, page9_ctrl0);
				ctrlShow(ctrl1, page9_ctrl1);
				ctrlShow(ctrl2, page9_ctrl2);
				ctrlShow(ctrl3, page9_ctrl3);
				ctrlShow(ctrl4, page9_ctrl4);
				ctrlShow(ctrl5, page9_ctrl5);
				ctrlShow(ctrl6, page9_ctrl6);
				ctrlShow(ctrl7, page9_ctrl7);
				// 10
				// 新人淘金力
				integral = data.investmentInfo.total_integral //累计积分
				//老用户淘金力
				investTimes = data.investmentInfo.investment_times; //累计投资次数
				averageTimes = data.investmentInfo.average_times; //多少天投资一次
				totalDueInterest = data.investmentInfo.total_due_interest; //累计收益
				topAmount = data.investmentInfo.top_amount; //最高单笔投资金额
				longInvestDays = data.investmentInfo.long_investment_days; //最长项目期限
			}
		}
	});
}
function ctrlShow(ctrl, page9_ctrl) {
	if (ctrl) {
		page9_ctrl.css({display: 'blcok'})
	} else {
		page9_ctrl.css({display: 'none'})
	}
}

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isiOS == true) {
	var musicStatus = 1; //第一次进入ios页面
	musicbtn.removeClass('play');
	$(document).on("touchstart click", function() {
		if (musicStatus) {
			music.play();
			musicbtn.addClass('play');
			musicStatus = 0;
		}
	});
	musicbtn.click(function() {
		musicStatus = 0;
		if (music.paused) {
			music.play();
			musicbtn.addClass('play');
		} else {
			music.pause();
			musicbtn.removeClass('play');
		}
	})
} else {
	musicbtn.click(function() {
		if (music.paused) {
			music.play();
			musicbtn.css({animationPlayState: 'running'});
		} else {
			music.pause();
			musicbtn.css({animationPlayState: 'paused'});
		}
		// if(musicStatus){
		// 	music.play();
		// 	musicbtn.addClass('play');
		// 	musicStatus = 0;
		// }
	})
}
$('.invest_btn,.invest_btn2').click(function() {
	go2App(2);
})

//邀友
$('.invist_btn2').click(function() {
	share(mobile);
})

//h5邀友页面 https://image.ppmiao.com/Public/activity/Act20170818_invite/index.html
invist_btn.click(function() {
	window.location.href = 'https://image.ppmiao.com/Public/activity/Act20170818_invite/index.html?mobile=' + mobile + '&versionName=' + versionName + 'data=' + token;
});

// 邀友
function share(phone) {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (phone && phone != "") {
		var url = shareUrl; //-----------
		if (isiOS == true) {
			str = '{ "content": "' + content + '", "url": "' + url + '","imageUrl":"' + imgUrl + '","mobile":"' + b64EncodeUnicode(phone) + '","title":"' + title + '"}';
			firstClick(url, phone);
		} else {
			str = '{ "content": "' + content + '", "url": "' + url + '","imageUrl":"' + imgUrl + '","mobile":"' + b64EncodeUnicode(phone) + '","title":"' + title + '"}';
			ppm.share(str);
		}
	} else {}
}

function loadURL(url) {
	var iFrame;
	iFrame = document.createElement("iframe");
	iFrame.setAttribute("src", url);
	iFrame.setAttribute("style", "display:none;");
	iFrame.setAttribute("height", "0px");
	iFrame.setAttribute("width", "0px");
	iFrame.setAttribute("frameborder", "0");
	document.body.appendChild(iFrame);
	iFrame.parentNode.removeChild(iFrame);
	iFrame = null;
}

function firstClick(url, phone) {
	loadURL('share,' + url + "," + content + "," + b64EncodeUnicode(phone) + ',' + str);
}

function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
		return String.fromCharCode('0x' + p1);
	}));
}
