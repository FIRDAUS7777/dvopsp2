function cov_an73m4ik2(){var path="C:\\Users\\Fir\\Documents\\DVOPS_Projects\\dvopsp2\\public\\js\\ViewResourceFir.js";var hash="db2698288fa5f745c3d50e449a695618f78c288c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Fir\\Documents\\DVOPS_Projects\\dvopsp2\\public\\js\\ViewResourceFir.js",statementMap:{"0":{start:{line:3,column:13},end:{line:3,column:57}},"1":{start:{line:5,column:4},end:{line:13,column:9}},"2":{start:{line:6,column:8},end:{line:6,column:39}},"3":{start:{line:7,column:8},end:{line:7,column:15}},"4":{start:{line:10,column:11},end:{line:13,column:9}},"5":{start:{line:11,column:10},end:{line:11,column:65}},"6":{start:{line:12,column:10},end:{line:12,column:17}},"7":{start:{line:14,column:19},end:{line:14,column:21}},"8":{start:{line:15,column:18},end:{line:15,column:38}},"9":{start:{line:16,column:4},end:{line:16,column:54}},"10":{start:{line:17,column:4},end:{line:17,column:65}},"11":{start:{line:18,column:4},end:{line:42,column:6}},"12":{start:{line:19,column:6},end:{line:19,column:50}},"13":{start:{line:20,column:17},end:{line:20,column:19}},"14":{start:{line:21,column:6},end:{line:40,column:7}},"15":{start:{line:21,column:19},end:{line:21,column:20}},"16":{start:{line:22,column:8},end:{line:39,column:18}},"17":{start:{line:41,column:6},end:{line:41,column:63}},"18":{start:{line:43,column:4},end:{line:43,column:19}}},fnMap:{"0":{name:"searchMovies",decl:{start:{line:1,column:9},end:{line:1,column:21}},loc:{start:{line:1,column:24},end:{line:44,column:3}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:18,column:21},end:{line:18,column:22}},loc:{start:{line:18,column:33},end:{line:42,column:5}},line:18}},branchMap:{"0":{loc:{start:{line:5,column:4},end:{line:13,column:9}},type:"if",locations:[{start:{line:5,column:4},end:{line:13,column:9}},{start:{line:10,column:11},end:{line:13,column:9}}],line:5},"1":{loc:{start:{line:10,column:11},end:{line:13,column:9}},type:"if",locations:[{start:{line:10,column:11},end:{line:13,column:9}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:10}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"db2698288fa5f745c3d50e449a695618f78c288c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_an73m4ik2=function(){return actualCoverage;};}return actualCoverage;}cov_an73m4ik2();function searchMovies(){cov_an73m4ik2().f[0]++;var id=(cov_an73m4ik2().s[0]++,document.getElementById("searchField").value);cov_an73m4ik2().s[1]++;if(id.length==0){cov_an73m4ik2().b[0][0]++;cov_an73m4ik2().s[2]++;alert("Search field required");cov_an73m4ik2().s[3]++;return;}else{cov_an73m4ik2().b[0][1]++;cov_an73m4ik2().s[4]++;if(id.length<2){cov_an73m4ik2().b[1][0]++;cov_an73m4ik2().s[5]++;alert("Search field should be at least 2 characters");cov_an73m4ik2().s[6]++;return;}else{cov_an73m4ik2().b[1][1]++;}}var response=(cov_an73m4ik2().s[7]++,"");var request=(cov_an73m4ik2().s[8]++,new XMLHttpRequest());cov_an73m4ik2().s[9]++;request.open("GET","/view-resource/"+id,true);cov_an73m4ik2().s[10]++;request.setRequestHeader("Content-Type","application/json");cov_an73m4ik2().s[11]++;request.onload=function(){cov_an73m4ik2().f[1]++;cov_an73m4ik2().s[12]++;response=JSON.parse(request.responseText);var html=(cov_an73m4ik2().s[13]++,"");cov_an73m4ik2().s[14]++;for(var i=(cov_an73m4ik2().s[15]++,0);i<response.length;i++){cov_an73m4ik2().s[16]++;html+="<tr>"+"<td>"+(i+1)+"</td>"+"<td>"+response[i].movieTitle+"</td>"+"<td>"+response[i].movieImage+"</td>"+"<td>"+response[i].movieDescription+"</td>"+"<td>"+response[i].movieDirectors+"</td>"+"</tr>";}cov_an73m4ik2().s[17]++;document.getElementById("tableContent").innerHTML=html;};cov_an73m4ik2().s[18]++;request.send();}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfYW43M200aWsyIiwiYWN0dWFsQ292ZXJhZ2UiLCJzZWFyY2hNb3ZpZXMiLCJmIiwiaWQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibGVuZ3RoIiwiYiIsImFsZXJ0IiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImh0bWwiLCJpIiwibW92aWVUaXRsZSIsIm1vdmllSW1hZ2UiLCJtb3ZpZURlc2NyaXB0aW9uIiwibW92aWVEaXJlY3RvcnMiLCJpbm5lckhUTUwiLCJzZW5kIl0sInNvdXJjZXMiOlsiVmlld1Jlc291cmNlRmlyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNlYXJjaE1vdmllcygpIHtcclxuXHJcbiAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZpZWxkXCIpLnZhbHVlXHJcblxyXG4gICAgaWYgKGlkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJTZWFyY2ggZmllbGQgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGVsc2UgaWYgKGlkLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiU2VhcmNoIGZpZWxkIHNob3VsZCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIiApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIHZhciByZXNwb25zZSA9IFwiXCI7XHJcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiL3ZpZXctcmVzb3VyY2UvXCIgKyBpZCwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIHZhciBodG1sID0gXCJcIjtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGh0bWwgKz1cclxuICAgICAgICAgIFwiPHRyPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIChpICsgMSkgK1xyXG4gICAgICAgICAgXCI8L3RkPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLm1vdmllVGl0bGUgK1xyXG4gICAgICAgICAgXCI8L3RkPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLm1vdmllSW1hZ2UgK1xyXG4gICAgICAgICAgXCI8L3RkPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLm1vdmllRGVzY3JpcHRpb24gK1xyXG4gICAgICAgICAgXCI8L3RkPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLm1vdmllRGlyZWN0b3JzICtcclxuICAgICAgICAgIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICBcIjwvdHI+XCI7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZUNvbnRlbnRcIikuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9Il0sIm1hcHBpbmdzIjoiNi9FQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQs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