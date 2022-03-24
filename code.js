var outputstr="";
function doGet(e) {
    var email = Session.getActiveUser().getEmail();

     if(e.parameters.pubdomain!=null&&e.parameters.pubdomain!=""){
       try{
      var pubDomain=e.parameters.pubdomain.toString()
      var adsendpoint ="https://"+pubDomain+"/app-ads.txt";
      var response = UrlFetchApp.fetch(adsendpoint);
       }catch(exception){
          return  HtmlService.createHtmlOutputFromFile("noadsfound")
       }
     
      var pubrawTxt = response.getContentText()
      var pubrawTxt=response.getContentText().toString();
      pubrawTxt = pubrawTxt.replace(/\s*/g,"")
      pubrawTxt = pubrawTxt.toLowerCase().toString()
      Logger.log("pubrawTxt"+pubrawTxt.toString());
      doMatch(pubrawTxt) 
      if(outputstr!=null&&outputstr!=""){
        var temp= HtmlService.createTemplateFromFile("ummatchedresult")
        temp.ummatched=outputstr;
        Logger.log("outputstr"+outputstr.toString());
        return temp.evaluate();
      }else{
        HtmlService.createHtmlOutputFromFile("matchedresult")
      }
     }else
     {   
        return HtmlService.createHtmlOutputFromFile("error");

    }
}
 

function sendemail(rawdata){
  
   Logger.log("rawdata"+rawdata.emailadr.toString()+"items:"+rawdata.umtachedItems.toString());
  
  //  var meesage="  Hi,dear\n   We found their are some unmatched items in your ads.txt file.\n   The unmatched items:\n "+rawdata.umtachedItems.toString() +"  \n\n\nPlease update the file as soon as possible to optimize your income.\n\n\n\n\n   Thanks,\n   Vungle "
  var teamemailHtml = HtmlService.createTemplateFromFile("email")
   teamemailHtml.outputstr=rawdata.umtachedItems.toString();
   var htmlMessage = teamemailHtml.evaluate().getContent();
   var currentUser =  Session.getActiveUser().getEmail().toString()
  MailApp.sendEmail(rawdata.emailadr.toString(), "Ads.txt unmatched items found", "I dont know ",{name:currentUser,htmlBody:htmlMessage});

}




     function doMatch(pubrawTxt){
           var ummatchedArray=[]
           var vungleRawTxt="acexchange.co.kr,1017355401,RESELLER\nacexchange.co.kr,1081983882,RESELLER\nacexchange.co.kr,1618149085,RESELLER\nadcolony.com,197af3936679d34e,RESELLER,1ad675c9de6b5176\nadcolony.com,1efc6603710003ea,RESELLER,1ad675c9de6b5176\nadcolony.com,382d79cd1387e603,RESELLER,1ad675c9de6b5176\nadcolony.com, 7d04a18a58085918, RESELLER, 1ad675c9de6b5176\nadcolony.com, 801e49d1be83b5f9, RESELLER, 1ad675c9de6b5176\nadcolony.com, 81685aa581edd381, RESELLER, 1ad675c9de6b5176\nadcolony.com,c490f6e7399a25d6,RESELLER,1ad675c9de6b5176\nadcolony.com,e8d70ef9dfabde92,RESELLER,1ad675c9de6b5176\nadcolony.com, f858ba060bce51ad, RESELLER, 1ad675c9de6b5176\nadmanmedia.com,43,RESELLER\nadmanmedia.com,48,RESELLER\nadmanmedia.com,594,RESELLER\nadmixer.co.kr,1185,RESELLER\nadmixer.co.kr,1287,RESELLER\nadmixer.com, 8676470, RESELLER\nadmixer.net, 0072fb58-999b-445e-9a9b-3fc2a7194277, RESELLER\nadmixer.net, 2878f07c-cc3f-4f8a-a26c-8e6033a539a6, RESELLER\nadmixer.net, 3d2ed9f3-1ce6-436c-896b-4d9c8418ad3f, RESELLER\nadmixer.net, 8e380da6-31ba-488c-939c-290c48d577e4, RESELLER\nadmixer.net,de2ae535-59eb-4f0b-95e3-89f821933d47,RESELLER\nadtiming.com, a-126, RESELLER, bf66753b8f380142\nadvertising.com,28246,RESELLER\nadtiming.com, a-126, RESELLER, bf66753b8f380142\nadvertising.com,28246,RESELLER\nadview.com,32076181,RESELLER,1b2cc038a11ea319\nadwmg.com, 8676470, RESELLER\nadyoulike.com,b4bf4fdd9b0b915f746f6747ff432bde,RESELLER,4ad745ead2958bf7\nalgorix.co, 54250, RESELLER\naol.com,57992,RESELLER,e1a5b5b6e3255540\naol.com,58905,RESELLER,e1a5b5b6e3255540\naol.com, 59025, RESELLER, e1a5b5b6e3255540\nappads.in, 107606, RESELLER\nappnexus.com, 3368, RESELLER\nappnexus.com,3703,RESELLER,f5ab79cb980f11d1\nappnexus.com,4052,RESELLER,f5ab79cb980f11d1\nappnexus.com,13099,RESELLER,f5ab79cb980f11d1\nappnexus.com,13099,RESELLER,f5ab79cb980f11d1\nappnexus.com,13099,RESELLER,f5ab79cb980f11d1\nappads.in, 107606, RESELLER\nappads.in, 107606, RESELLER\nappads.in, 107606, RESELLER\nappads.in, 107606, RESELLER\nappads.in, 107606, RESELLER\nappads.in, 107606, RESELLER\naralego.com,par-2736764b3a38eb77fdeaeb7444ab844,RESELLER\naralego.com, par-8a2a4a443b29bb92f9622d3a67346ab, RESELLER\naralego.com, par-be776b39322a364bc7767a69ab99bbd9, RESELLER\naralego.com, par-d232d76a227923da1d28d94aa9699ae8, RESELLER\naralego.com, par-d233672dd744287dcd7e2439b82494ad, RESELLER\naralego.com,pub-77229e766e887de6fb9ed63a78d6a629,RESELLER\naxonix.com,56222,RESELLER\naxonix.com,57264,RESELLER\naxonix.com,57716,RESELLER\naxonix.com, 57869, RESELLER\nbeachfront.com, 805, RESELLER, e2541279e8e2ca4d\nbetweendigital.com,43092,RESELLER\nbetweendigital.com,43843,RESELLER\nbidence.com,3de04db04d6eb28b13281a39b1c16d67,RESELLER\nbidmachine.io, 55, RESELLER\nbidmachine.io, 59, RESELLER\nblis.com,33,RESELLER,61453ae19a4b73f4\nchartboost.com, 5eac93f341016b09ff0019b6, RESELLER\ncmcm.com,105, RESELLER\ncmcm.com, 127, RESELLER\ncmcm.com, 135, RESELLER\ncmcm.com, 271, RESELLER\ncontextweb.com,560288,RESELLER,89ff185a4c4e857c\ncontextweb.com, 561849, RESELLER, 89ff185a4c4e857c\ncontextweb.com, 561884, RESELLER, 89ff185a4c4e857c\ncontextweb.com, 561913, RESELLER, 89ff185a4c4e857c\ncontextweb.com,561998,RESELLER,89ff185a4c4e857c\ncontextweb.com,562122,RESELLER,89ff185a4c4e857c\ncontextweb.com,562546,RESELLER,89ff185a4c4e857c\nconversantmedia.com, 100293, RESELLER, 03113cd04947736d\nconversantmedia.com,100081,RESELLER,03113cd04947736d\nconversantmedia.com,100246,RESELLER,03113cd04947736d\nconversantmedia.com, 100293, RESELLER, 03113cd04947736d\ncriteo.com, 186227, RESELLER\ndecenterads.com,14,RESELLER\ndecenterads.com,198,RESELLER\ndecenterads.com,198,RESELLER\ndistrictm.io,101649,RESELLER,3fd707be9c4527c3\ne-planning.net,2af6560b926d20f9,RESELLER,c1ba615865ed87b2\ne-planning.net,a15ce31379a418ac,RESELLER,c1ba615865ed87b2\nemxdgt.com, 1324, RESELLER, 1e1d41537f7cad7f\nengagebdr.com, 16, RESELLER\nemxdgt.com, 1324, RESELLER, 1e1d41537f7cad7f\nengagebdr.com, 10252, RESELLER\nemxdgt.com, 1324, RESELLER, 1e1d41537f7cad7f\nemxdgt.com, 1324, RESELLER, 1e1d41537f7cad7f\nflat-ads.com, 6, RESELLER\nfreewheel.tv, 1192799, RESELLER\nfreewheel.tv, 1192799, RESELLER\nflat-ads.com, 6, RESELLER\nflat-ads.com, 6, RESELLER\nfreewheel.tv, 1161393, RESELLER\nfreewheel.tv, 1162449, RESELLER\nfreewheel.tv, 1173729, RESELLER\nfreewheel.tv, 1173793, RESELLER\nfreewheel.tv, 1192767, RESELLER\nfreewheel.tv, 1192799, RESELLER\ngammassp.com, 1521707344, RESELLER, 31ac53fec2772a83\ngitberry.com, xlv, RESELLER\ngoogle.com,pub-3769010358500643,RESELLER,f08c47fec0942fa0\ngoogle.com,pub-4568609371004228,RESELLER,f08c47fec0942fa0\ngoogle.com, pub-7214269347534569, RESELLER, f08c47fec0942fa0\ngoogle.com, pub-9685734445476814, RESELLER, f08c47fec0942fa0\ngothamads.com, 1339, RESELLER, d9c86e5dec870222\ngroundtruth.com,107,RESELLER,81cbf0a75a5e0e9a\ngumgum.com,13706,RESELLER,ffdef49475d318a9\nhitapps.com, 8613985ec49eb8f757ae6439e879bb2a6784, RESELLER\nimprovedigital.com, 1210, RESELLER\nimprovedigital.com, 1221, RESELLER\nimprovedigital.com,1331,RESELLER\nimprovedigital.com, 1366, RESELLER\nimprovedigital.com,1532,RESELLER\nimprovedigital.com,1556,RESELLER\nindexexchange.com,184738,RESELLER,50b1c356f2c5c8fc\nindexexchange.com, 185578, RESELLER, 50b1c356f2c5c8fc\nindexexchange.com, 185774, RESELLER, 50b1c356f2c5c8fc\nindexexchange.com,191332,RESELLER,50b1c356f2c5c8fc\nindexexchange.com,194730,RESELLER,50b1c356f2c5c8fc\ninmobi.com, 22e5354e453f49348325184e25464adb, RESELLER, 83e75a7ae333ca9d\ninmobi.com, 5baa7ca93ef847c0876297e737dac3ee, RESELLER, 83e75a7ae333ca9d\ninmobi.com,61d733c3779d43e590c51c8bc078e10c,RESELLER,83e75a7ae333ca9d\ninmobi.com,867c89bb53994aaeb9dae3ce75b03e78,RESELLER,83e75a7ae333ca9d\ninmobi.com,ab915bcef5b24940bf745f1a8f427bec,RESELLER,83e75a7ae333ca9d\ninmobi.com, c1e6d3502da64ebaa3ad0e4a4be15f11, RESELLER, 83e75a7ae333ca9d\ninmobi.com,ec6f6ceb8bb1440ba5455644ec96c275,RESELLER,83e75a7ae333ca9d\ninmobi.com, f3924290136e4129a5c082ff982c3a58, RESELLER, 83e75a7ae333ca9d\nkubient.com, 5eb2cb089c866, RESELLER, 4f12311e6ed900a3\nlijit.com, 273644, RESELLER\nlimpid.tv,203581,RESELLER\nlkqd.net, 459, RESELLER, 59c49fa9598a0117\nlkqd.net,647,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nloopme.com,11322,RESELLER,6c8d5f95897a5a3b\nloopme.com,11322,RESELLER,6c8d5f95897a5a3b\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nlkqd.net,654,RESELLER,59c49fa9598a0117\nloopme.com, s-2411, RESELLER, 6c8d5f95897a5a3b\nmars.media, 1010422, RESELLER, 8624339f102fb076\nloopme.com, s-2411, RESELLER, 6c8d5f95897a5a3b\nmeitu.com, 149, RESELLER\nmeitu.com, 179, RESELLER\nmeitu.com, 253, RESELLER\nmobfox.com, 82593, RESELLER, 5529a3d1f59865be\nmobirtb.com, 149, RESELLER\nolaex.biz,100023,RESELLER\nonetag.com,59aa7be4921bac8,RESELLER\nonetag.com, 59d216e971852f2, RESELLER\nonetag.com, 5a02ff98ba6be67, RESELLER\nonetag.com, 5d1628750185ace, RESELLER\nonetag.com, 66cff8e37d871be, RESELLER\nonetag.com,74ea58ae86fd4b0,RESELLER\nopenx.com,537149888,RESELLER,6a698e2ec38604c6\nopenx.com, 537152826, RESELLER, 6a698e2ec38604c6\nopenx.com, 539315083, RESELLER, 6a698e2ec38604c6\nopenx.com, 539472296, RESELLER, 6a698e2ec38604c6\nopenx.com, 540011801, RESELLER, 6a698e2ec38604c6\nopenx.com,540031703,RESELLER,6a698e2ec38604c6\nopenx.com, 540280728, RESELLER, 6a698e2ec38604c6\nopenx.com,540298543,RESELLER,6a698e2ec38604c6\nopenx.com,540326226,RESELLER,6a698e2ec38604c6\nopenx.com, 540543195, RESELLER, 6a698e2ec38604c6\nopenx.com, 540679900, RESELLER, 6a698e2ec38604c6\nopenx.com,541031350,RESELLER,6a698e2ec38604c6\nopenx.com, 541177349, RESELLER\npokkt.com, 5610 , RESELLER, c45702d9311e25fd\npokkt.com, 7000, RESELLER, c45702d9311e25fd\npokkt.com,7606,RESELLER,c45702d9311e25fd\npubmatic.com, 8676470, RESELLER\npokkt.com,7606,RESELLER,c45702d9311e25fd\npokkt.com,7606,RESELLER,c45702d9311e25fd\npubmatic.com, 156517, RESELLER, 5d62403b186f2ace\npubmatic.com, 156520, RESELLER, 5d62403b186f2ace\npubmatic.com,156631,RESELLER,5d62403b186f2ace\npubmatic.com,156835,RESELLER,5d62403b186f2ace\npubmatic.com,156931,RESELLER,5d62403b186f2ace\npubmatic.com,157097,RESELLER,5d62403b186f2ace\npubmatic.com, 157654, RESELLER, 5d62403b186f2ace\npubmatic.com, 158060, RESELLER, 5d62403b186f2ace\npubmatic.com,158100,RESELLER,5d62403b186f2ace\npubmatic.com,158154,RESELLER,5d62403b186f2ace\npubmatic.com, 158271, RESELLER, 5d62403b186f2ace\npubmatic.com,159035,RESELLER,5d62403b186f2ace\npubmatic.com, 159542, RESELLER\npubmatic.com, 159668, RESELLER\npubmatic.com, 159831, RESELLER, 5d62403b186f2ace\npubmatic.com, 159846, RESELLER, 5d62403b186f2ace\npubmatic.com, 159897, RESELLER, 5d62403b186f2ace\npubmatic.com,160145,RESELLER,5d62403b186f2ace\npubmatic.com, 160194, RESELLER, 5d62403b186f2ace\npubmatic.com, 160195, RESELLER, 5d62403b186f2ace\npubmatic.com, 8676470, RESELLER\npubnative.net, 1006458, RESELLER, d641df8625486a7b\npubnative.net,1006576,RESELLER,d641df8625486a7b\npubnative.net,1006936,RESELLER,d641df8625486a7b\npubnative.net,1006951,RESELLER,d641df8625486a7b\npubnative.net, 1007302, RESELLER, d641df8625486a7b\npubwheel.com, 32076181, RESELLER, 1b2cc038a11ea319\nreforge.in, 353, RESELLER\nrhythmone.com,188404962,RESELLER,a670c89d4a324e47\nrhythmone.com,2564526802,RESELLER,a670c89d4a324e47\nrhythmone.com,3218195319,RESELLER,a670c89d4a324e47\nrhythmone.com, 3880497124, RESELLER\nrhythmone.com,4173858586,RESELLER,a670c89d4a324e47\nrhythmone.com, 4268206200, RESELLER, a670c89d4a324e47\nrubiconproject.com,11726,RESELLER,0bfd66d529a55807\nrubiconproject.com,12186,RESELLER,0bfd66d529a55807\nrubiconproject.com,12266,RESELLER,0bfd66d529a55807\nrubiconproject.com, 13626, RESELLER, 0bfd66d529a55807\nrubiconproject.com,13856,RESELLER,0bfd66d529a55807\nrubiconproject.com, 15278, RESELLER, 0bfd66d529a55807\nrubiconproject.com,16114,RESELLER,0bfd66d529a55807\nrubiconproject.com, 16834, RESELLER, 0bfd66d529a55807\nrubiconproject.com,17328,RESELLER,0bfd66d529a55807\nrubiconproject.com, 19724, RESELLER\nrubiconproject.com,19724,RESELLER,0bfd66d529a55807\nrubiconproject.com,20744,RESELLER,0bfd66d529a55807\nrubiconproject.com,23644,RESELLER,0bfd66d529a55807\nrubiconproject.com,23732,RESELLER,0bfd66d529a55807\nsabio.us, 100032, RESELLER, 96ed93aaa9795702\nsilvermob.com,320,RESELLER\nsmaato.com, 1100042823, RESELLER, 07bcf65f187117b4\nsmaato.com,1100044045,RESELLER,07bcf65f187117b4\nsmaato.com,1100049757,RESELLER,07bcf65f187117b4\nsmartadserver.com,1692,RESELLER\nsmartadserver.com,3232,RESELLER\nsmartadserver.com,3797,RESELLER\nsmartadserver.com,4071,RESELLER\nsmartadserver.com,4111,RESELLER\nsmartyads.com, 368, RESELLER\nsonobi.com,cc3858f35e,RESELLER,d1a215d9eb5aee9e\nsonobi.com,eaec54c63f,RESELLER,d1a215d9eb5aee9e\nsovrn.com, 273644, RESELLER\nspotx.tv,82068,RESELLER,7842df1d2fe2db34\nspotx.tv, 283422, RESELLER, 7842df1d2fe2db34\nsovrn.com, 273644, RESELLER\nsovrn.com, 273644, RESELLER\nsovrn.com, 273644, RESELLER\nspotxchange.com,82068,RESELLER,7842df1d2fe2db34\nspotxchange.com, 283422, RESELLER, 7842df1d2fe2db34\nspotx.tv, 283422, RESELLER, 7842df1d2fe2db34\nspotx.tv, 283422, RESELLER, 7842df1d2fe2db34\nspotx.tv, 283422, RESELLER, 7842df1d2fe2db34\ntappx.com,14039,RESELLER,9f375a07da0318ec\ntarget.my.com, 8676470, RESELLER\ntelaria.com, s92od-u4sw5, RESELLER, 1a4e959a1b50034a\ntpmn.io,368,RESELLER\ntpmn.io,406,RESELLER\ntremorhub.com, s92od-u4sw5, RESELLER, 1a4e959a1b50034a\nucfunnel.com, par-8a2a4a443b29bb92f9622d3a67346ab, RESELLER\nucfunnel.com, par-be776b39322a364bc7767a69ab99bbd9, RESELLER\nucfunnel.com, par-d232d76a227923da1d28d94aa9699ae8, RESELLER\nucfunnel.com, par-d233672dd744287dcd7e2439b82494ad, RESELLER\nverve.com,15503,RESELLER,0c8f5958fc2d6270\nucfunnel.com, par-d233672dd744287dcd7e2439b82494ad, RESELLER\nucfunnel.com, par-d233672dd744287dcd7e2439b82494ad, RESELLER\nvideo.unrulymedia.com, 3704396951, RESELLER\nvideo.unrulymedia.com,4268206200,RESELLER\nwebeyemob.com, 70090, RESELLER\nwebeyemob.com, 70101, RESELLER\nxad.com,958,RESELLER,81cbf0a75a5e0e9a\nyahoo.com,55771,RESELLER,e1a5b5b6e3255540\nyahoo.com,57992,RESELLER,e1a5b5b6e3255540\nyahoo.com,58905,RESELLER,e1a5b5b6e3255540\nyahoo.com, 59025, RESELLER, e1a5b5b6e3255540\nyieldlab.net, 2172218, RESELLER"
           
      var snsArr=vungleRawTxt.split(/[(\r\n)\r\n]+/)
       snsArr=unique(snsArr)
      for(var row=0; row<snsArr.length; row++){
         var vungleTxt=snsArr[row].toString().toLowerCase()
          vungleTxt=vungleTxt.replace(/\s*/g,"")
          if(pubrawTxt.search(vungleTxt)==-1){
              ummatchedArray.push(vungleTxt)
          }else{
            continue
          }
      }
      for(var row=0; row<ummatchedArray.length; row++){
        Logger.log("ummatched"+ummatchedArray[row]+"===========");
        outputstr=outputstr+ummatchedArray[row]+"\n";
      }
 }

function unique(arr) {
   
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
