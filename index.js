//timeline.js
DrawEventstory("eventstory","100%","290px");//优先eventstory1的高度5*40+60+10
//eventdrop.js
DrawEventstory1("#eventstory1",$("#eventstory1").width());//只能设置宽度，高度=内容多少*40+margin.top+margin.bottom
//narrative.js
DrawEventstory2("#eventstory2",$("#eventstory2").width(),$("#eventstory1").height());
//swimlane.js
Draweventstory3("#eventstory3",$("#eventstory3").width(),$("#eventstory1").height());

/////////////////////////////////////tools.js/////////////////////////////////////
dthree.tool.DrawRadialTree(d3.select("#relations").append("svg"),$("#relations").width(),($("#mapdiv").height()+$("#crossfilter").height()-40)/2);
//绘制力导向关系
dthree.tool.DrawForceGraph(d3.select("#relation2").append("svg"),$("#relations").width(),$("#relations").height());
//绘制热图
dthree.tool.DrawHeatMap(d3.select("#property").append("svg"),$("#relations").width(),($("#mapdiv").height()+$("#crossfilter").height()-40)/2);
//绘制平行坐标系
dthree.tool.DarwParallel(d3.select("#property2").append("svg"),$("#property").width(),$("#property").height());
//绘制树图
dthree.tool.DrawTreeMap("#property3",$("#property").width(),$("#property").height());
//绘制火焰图
dthree.tool.DrawFlameGraph("#property4",$("#property").width(),$("#property").height());
//绘制统计图表
dthree.tool.DrawCircularheat("#wholePropert1",$("#mapdiv").width()/3-10-20,$("#wholePropert1").height());
dthree.tool.DrawBarChart("#wholePropert2",$("#mapdiv").width()/3-10-20,$("#wholePropert2").height());
dthree.tool.DrawCircleChart("#wholePropert3",$("#mapdiv").width()/3-10-20,$("#wholePropert3").height());
dthree.tool.DrawStackedBarChart("#wholePropert4",$("#mapdiv").width()/3-10-40,$("#wholePropert4").height());
dthree.tool.DrawMultiLine("#wholePropert5",$("#mapdiv").width()/3-10-20,$("#wholePropert5").height());
dthree.tool.DrawScatterPlot("#wholePropert6",$("#mapdiv").width()/3-10-20,$("#wholePropert6").height());
dthree.tool.Draw3DDonut("#wholePropert7",$("#mapdiv").width()/3-10-20,$("#wholePropert7").height());
dthree.tool.DrawAreaTime("#wholePropert8",$("#mapdiv").width()/3-10-20,$("#wholePropert8").height())
//DrawSunburst(d3.select("#wholePropert9").append("svg"),$("#eventstory").width()/3-10-20,$("#wholePropert8").height(),($("#eventstory").width()/3-10-20)/2,($("#eventstory").width()/3-10-20)/2,$("#wholePropert8").height()/2,[]);
dthree.tool.DrawCirclePacking("#wholePropert9",$("#mapdiv").width()/3-10-20,$("#wholePropert9").height(),$("#wholePropert9").height());

//绘制词云
var wordsdata = ["Hello", "world", "normally", "you", "want", "more", "words","than", "this","Hello", "world", "normally", "you", "want", "more", "words","than", "this","Hello", "world", "normally", "you", "want", "more", "words","than", "this","Hello", "world", "normally", "you", "want", "more", "words","than", "this"];
dthree.tool.DrawWordCloud(d3.select("#wholeNavPic").append("svg"),$("#wholeNavPic").height(),$("#wholeNavPic").height(),wordsdata);

