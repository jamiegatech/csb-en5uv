(this["webpackJsonphci-project"]=this["webpackJsonphci-project"]||[]).push([[0],{91:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ninite_top.75fb8026.png"},92:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(64),d=a.n(s),n=a(119),c=a(13),j=a(12),r=a(70),x=a(121),o=a(131),b=a(127),l=a(128),O=a(125),u=a(122),p=a(133),v=a(67),D=a.n(v),h=a(66),L=a.n(h),E=a(0);function g(e){var t=i.useState(e.data[e.index].selected),a=Object(c.a)(t,2),s=a[0],d=a[1];return Object(E.jsx)(p.a,{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}},disablePadding:!0,control:Object(E.jsx)(u.a,{checked:s,onChange:function(t){e.data[t.target.id].selected=!e.data[t.target.id].selected,d(e.data[t.target.id].selected),e.setData(e.data),e.updateListEvent(e.data)},edge:"start",disableRipple:!0,icon:Object(E.jsx)(L.a,{}),checkedIcon:Object(E.jsx)(D.a,{}),id:e.data[e.index].id}),label:Object(E.jsx)(l.a,{component:"div",fontSize:15,children:"".concat(e.data[e.index].name," (v").concat(e.data[e.index].version,") ").concat(e.data[e.index].description)})})}var m=a(129),y=a(123),f=a(130);function S(e){return Object(E.jsx)(m.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#fff"},children:e.data.filter((function(e){return e.selected})).map((function(e){return Object(E.jsx)(y.a,{disablePadding:!0,children:Object(E.jsx)(f.a,{id:1,primary:"".concat(e.name)})},e)}))})}var w=a(126),P=a(132),C=a(68),A=a.n(C),R=["children","value","index"];function M(e){var t=e.children,a=e.value,i=e.index,s=Object(r.a)(e,R);return Object(E.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:a!==i,id:"vertical-tabpanel-".concat(i),"aria-labelledby":"vertical-tab-".concat(i)},s),{},{children:a===i&&Object(E.jsx)(l.a,{sx:{p:3},children:Object(E.jsx)(b.a,{children:t})})}))}function V(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var W=1;function k(e){var t=i.useState(0),a=Object(c.a)(t,2),s=a[0],d=a[1],n=i.useState(e.software),r=Object(c.a)(n,2),b=r[0],u=r[1],p=i.useState(W),v=Object(c.a)(p,2),D=v[0],h=v[1],L=function(e){W+=1,console.log(W),h(W)};return i.createRef(),Object(E.jsxs)(l.a,{sx:{flexGrow:1,bgcolor:"#eeeeee",display:"flex",height:700},children:[Object(E.jsxs)(x.a,{orientation:"vertical",variant:"scrollable",value:s,onChange:function(e,t){d(t)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Web Browsers"},V(0)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"File Sharing"},V(1)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Developer Tools"},V(2)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Messaging"},V(3)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Media"},V(4)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Runtimes"},V(5)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Utilities"},V(6)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Imaging"},V(7)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Documents"},V(8)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Online Storage"},V(9)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Security"},V(10)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Compression"},V(11)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}})),Object(E.jsx)(o.a,Object(j.a)(Object(j.a)({label:"Other"},V(12)),{},{sx:{"&:hover":{color:"#1d3366",opacity:[.7,.7,.7]}}}))]}),Object(E.jsxs)(O.a,{container:!0,spacing:-4,children:[Object(E.jsxs)(O.a,{item:!0,xs:6,sx:{bgcolor:"#eeeeee"},children:[Object(E.jsx)(M,{value:s,index:0,children:Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:0,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:1,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:2,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:3,updateListEvent:L})]})}),Object(E.jsx)(M,{value:s,index:1,children:Object(E.jsx)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:Object(E.jsx)(g,{data:b,setData:u,index:4,updateListEvent:L})})}),Object(E.jsx)(M,{value:s,index:2,children:Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:5,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:6,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:7,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:8,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:9,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:10,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:11,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:12,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:13,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:14,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:15,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:16,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:17,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:18,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:19,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:20,updateListEvent:L})]})}),Object(E.jsxs)(M,{value:s,index:3,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:21,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:22,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:23,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:24,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:25,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:26,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:4,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:27,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:28,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:29,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:30,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:31,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:32,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:33,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:34,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:35,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:36,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:37,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:38,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:39,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:5,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:40,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:41,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:42,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:43,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:44,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:45,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:46,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:6,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:47,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:48,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:49,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:50,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:51,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:52,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:53,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:54,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:55,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:56,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:57,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:58,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:7,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:59,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:60,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:61,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:62,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:63,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:64,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:65,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:66,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:67,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:68,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:8,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:69,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:70,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:71,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:72,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:73,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:9,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:74,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:75,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:76,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:77,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:10,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:78,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:79,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:80,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:81,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:82,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:83,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:84,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:11,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:85,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:86,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:87,updateListEvent:L})]})]}),Object(E.jsxs)(M,{value:s,index:12,children:[" ",Object(E.jsxs)(P.a,{sx:{width:"100%",maxWidth:1e3,bgcolor:"#eeeeee"},children:[Object(E.jsx)(g,{data:b,setData:u,index:88,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:89,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:90,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:91,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:92,updateListEvent:L}),Object(E.jsx)(g,{data:b,setData:u,index:93,updateListEvent:L})]})]})]}),Object(E.jsx)(O.a,{item:!0,xs:6,sx:{bgcolor:"#eeeeee"},children:Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:Object(E.jsx)(w.a,{variant:"contained",startIcon:Object(E.jsx)(A.a,{}),children:"Download MultiSoftware Installer"})}),Object(E.jsx)(l.a,{container:!0,sx:{width:"100%",maxWidth:334,display:"flex",bgcolor:"#fff"},children:Object(E.jsx)(S,{data:b})})]},D)})]})]})}var J=function(e,t,a,i){return{id:e,name:t,description:a,version:i,selected:!1}};d.a.render(Object(E.jsx)(n.a,{injectFirst:!0,children:Object(E.jsxs)("p",{children:[Object(E.jsx)("img",{src:a(91),alt:"Ninite"}),Object(E.jsx)(k,{software:[J(0,"Chrome","Google browser","64.31"),J(1,"Opera","Light weight browser","32.11"),J(2,"Firefox","Mozilla browser","64.31"),J(3,"Edge","Microsoft Browser","36.11"),J(4,"qBittorrent","Bittorrent File Sharing Client","31.21"),J(5,"Notepad++","Programmer notepad","42.11"),J(6,"Eclipse","IDE","52.11"),J(7,"Visual Studio Code","IDE","62.11"),J(8,"Python x64 3","Programming Language","3.11"),J(9,"Python 3","Programming Language","3.11"),J(10,"Python","Programming Language","2.7"),J(11,"JDK (AdoptOpenJDK) x64 8","Programming Language","8.2"),J(12,"JDK (AdoptOpenJDK) 8","Programming Language","8.2"),J(13,"JDK (AdoptOpenJDK) x64 11","Programming Language","11.1"),J(14,"JDK (Amazon Corretto) x64 8","Programming Language","8.2"),J(15,"JDK (Amazon Corretto) 8","Programming Language","8.2"),J(16,"JDK (Amazon Corretto) x64 11","Programming Language","11.1"),J(17,"FileZilla","FTP Client","5.1"),J(18,"WinSCP","SCP Client","6.7"),J(19,"PuTTY","SSH Client","2.3"),J(20,"WinMerge","File Merge tool","3.4"),J(21,"Zoom","Video Conferencing","3.11"),J(22,"Discord","Audio Chat tool","4.2"),J(23,"Skype","Video Conferencing","8.6"),J(24,"Pidgin","Mutiple Client Chat tool","5.3"),J(25,"Thunderbird","Email Client","6.44"),J(26,"Trillian","Mutiple Client Chat tool","7.5"),J(27,"iTunes","Apple Music player Service","32.2"),J(28,"VLC","Video Player","3.5"),J(29,"AIMP","Music Player","5.35"),J(30,"foobar2000","Music Player","3.3"),J(31,"Winamp","Music Player","6.3"),J(32,"MusicBee","Music Player","8.2"),J(33,"Audacity","Audio Editor","11.1"),J(34,"K-Lite Codecs","Video Codecs and player","3.27"),J(35,"GOM","Video Player","52.11"),J(36,"Spotify","Music Player Service","4.2"),J(37,"CCCP","Video Codecs and player","14.23"),J(38,"MediaMonkey","Music organizer","1.13"),J(39,"HandBrake","Video converter","2.11"),J(40,"Java (AdoptOpenJDK) x64 8","Java 8 Runtime","8.5"),J(41,"Java (AdoptOpenJDK) 8","Java 8 Runtime","8.6"),J(42,"Java (AdoptOpenJDK) x64 11","Java 11 Runtime","11.2"),J(43,".NET 4.8","Microsoft .Net Runtime","4.8"),J(44,".NET Desktop Runtime x64 5","Microsoft .Net Runtime","5.3"),J(45,".NET Desktop Runtime 5","Microsoft .Net Runtime","5.3"),J(46,"Silverlight","Silverlight Runtime","32.5"),J(47,"TeamViewer 15","Remote Access Tool","9.12"),J(48,"ImgBurn","Disk Burner","11.5"),J(49,"RealVNC Server","Remote access tool","3.2"),J(50,"RealVNC Viewer","Remote access tool","6.3"),J(51,"TeraCopy","Better File Copy","18.8"),J(52,"CDBurnerXP","CD Burner","21.1"),J(53,"Revo","App Uninstall Reverse Ninite","23.9"),J(54,"Launchy","Hotkey launcher","6.23"),J(55,"WinDirStat","Directory Statistics","7.6"),J(56,"Glary","System Utilities","4.11"),J(57,"InfraRecorder","Disk Burner","6.12"),J(58,"Classic Start","WinXP start for Win 7","4.6"),J(59,"Krita","Draw Paint Tool","2.6"),J(60,"Blender","3d  Creation sweet","5.7"),J(61,"Paint.NET","Draw Paint Tool","2.3"),J(62,"GIMP","Image editor","4.3"),J(63,"IrfanView","Image viewer","12.12"),J(64,"XnView","Image viewer","7.11"),J(65,"Inkscape","Vector graphics editor","8.3"),J(66,"FastStone","Image viewer","2.0"),J(67,"Greenshot","Screenshot tool","6.9"),J(68,"ShareX","Screenshot uploader","7.2"),J(69,"Foxit Reader","PDF Reader","4.8"),J(70,"LibreOffice","Office document program set","1.2"),J(71,"SumatraPDF","PDF Reader","7.15"),J(72,"CutePDF","PDF Reader","4.5"),J(73,"OpenOffice","Office document program set","6.2"),J(74,"Dropbox","Online and backup tool","8.2"),J(75,"Google Backup and Sync","Google Online File Sync and backup tool","32.3"),J(76,"OneDrive","Microsoft Online File backup tool","6.4"),J(77,"SugarSync","Online File Sync and backup tool","2.1"),J(78,"Essentials","Anti Virus","9.1"),J(79,"Malwarebytes","Anti Spyware and tracking","12.3"),J(80,"Avast","Anti Virus","4.8"),J(81,"AVG","Anti Virus","6.17"),J(82,"Spybot 2","Anti Spyware and tracking","3.4"),J(83,"Avira","Anti Virus","8.5"),J(84,"SUPERAntiSpyware","Anti Spyware and tracking","2.2"),J(85,"7-Zip","Compression tool","7.12"),J(86,"PeaZip","Compression tool","14.3"),J(87,"WinRAR","The Best Compression tool","5.14"),J(88,"Evernote","Live Document and Audio Backup","13.2"),J(89,"Google Earth","Google Atlas tool","15.5"),J(90,"Steam","Game library and platform","14.3"),J(91,"KeePass 2","Password storage","7.5"),J(92,"Everything","Local file search engine","2.8"),J(93,"NV Access","Scren reader","1.2")]})]})}),document.querySelector("#root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.49c82268.chunk.js.map