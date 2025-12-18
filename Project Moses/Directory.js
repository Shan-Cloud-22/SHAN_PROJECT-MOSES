// --- 1. DATA STRUCTURE (Emergency Data) ---
const emergencyData = [
    // BFP Data
    { locality: "Imus City", service: "BFP", name: "SUPT Rene V. Bullos - FIRE MARSHALL (Provincial Office)", address: "Emillio Aguinaldo Highway, Palico, Imus, Cavite", email: "cavitebfp@yahoo.com", tel: ["046-471-3747", "09433868772", "09678055581"] },
    { locality: "Cavite City", service: "BFP", name: "SINSP Adrian S. Dela Cruz - FIRE MARSHALL", address: "Zulueta St., San Roque, Cavite City", email: "admn.cavcityfs@gmail.com", tel: ["0464842899", "09666941416"] },
    { locality: "Kawit", service: "BFP", name: "SINSP Alma Cassandra A. Gardose - FIRE MARSHALL", address: "Tirona Highway, Brgy. Madalo, Kawit", email: "admn.bfpkawit@yahoo.com.ph", tel: ["0464845250", "09661320605"] },
    { locality: "Noveleta", service: "BFP", name: "SINSP Arvin D. Santiago - FIRE MARSHALL", address: "Poblacion Noveleta, Cavite", email: "noveletafirestation@gmail.com", tel: ["0464385684", "09175473696"] },
    { locality: "Rosario", service: "BFP", name: "SINSP Hayceeline M. Obligar - FIRE MARSHALL", address: "Poblacion Rosario, Cavite", email: "admn.rosario.fire214@yahoo.com", tel: ["0464381616", "09392326045"] },
    { locality: "Bacoor City", service: "BFP", name: "CINSP Genalyn T. Cabasa - FIRE MARSHALL", address: "St. Micheal Subdivision, Talaba 7, City of Bacoor", email: "bfpbacoor@yahoo.com", tel: ["0464176060", "09666959711"] },
    { locality: "Imus City", service: "BFP", name: "CINSP Hazel Olga L. Delos Reyes - FIRE MARSHALL", address: "Imus Public Market, Nuevo Avenue, City of Imus", email: "imuscfs@gmail.com", tel: ["0469705161", "09667059174"] },
    { locality: "Dasmariñas City", service: "BFP", name: "CINSP Jeffrey Ma Atienza - FIRE MARSHALL", address: "Central Market, Brgy. Zone 4, City of Dasmariñas", email: "dasmafscavite@gmail.com", tel: ["0464160875", "0464242537", "09953369534"] },
    { locality: "Carmona", service: "BFP", name: "SINSP Louila E. Tio - FIRE MARSHALL", address: "JM Loyola St., Brgy. Maduya, Carmona", email: "carmonafirestation@gmail.com", tel: ["0464301666", "09156021572"] },
    { locality: "General Mariano Alvarez", service: "BFP", name: "SINSP Connie A. Dulot - FIRE MARSHALL", address: "Municipal Compound, Brgy. 1, Gen. Mariano Alvarez", email: "gma.fire@yahoo.com", tel: ["0464439110", "09387819294", "09557903765"] },
    { locality: "Silang", service: "BFP", name: "SINSP Rodel D. Barrientos - FIRE MARSHALL", address: "San Miguel II,Silang", email: "silangfirestation@yahoo.com", tel: ["0464140484", "09156021593"] },
    { locality: "General Trias City", service: "BFP", name: "CINSP Lynelle M. Marbella - FIRE MARSHALL", address: "Brgy. Sampalucan, City Gen. Trias", email: "gen3bfp210.admn@gmail.com", tel: ["0464377625", "09175931522"] },
    { locality: "Amadeo", service: "BFP", name: "Gorgonio S. Mojica - FIRE MARSHALL", address: "Brgy. 1, Amadeo", email: "amadeobfp@gmail.com", tel: ["0464832490", "09156016805"] },
    { locality: "Indang", service: "BFP", name: "SINSP Raul P. Daguman - FIRE MARSHALL", address: "Brgy. 4 Indang Cavite", email: "Indang_bfp@yahoo.com", tel: ["0464151217", "09156034245", "09338245948"] },
    { locality: "Tanza", service: "BFP", name: "SINSP Alyster C. Castro - FIRE MARSHALL", address: "Antero Soriano Hi-way, Daang Amaya 1, Tanza", email: "tanzafs@gmail.com", tel: ["0465056084"] },
    { locality: "Trece Martires City", service: "BFP", name: "SINSP Allen Ryan M. De Guzman - FIRE MARSHALL", address: "Indang-Tanza Road, Brgy. San Agustin, Trece Martires City", email: "charliebase13@gmail.com", tel: ["0464190057", "09184257897"] },
    { locality: "Alfonso", service: "BFP", name: "SINSP Allan H. Rojales - FIRE MARSHALL", address: "Zmora St., Alfonso", email: "alfonsocavitefs@gmail.com", tel: ["0465220480", "09156022113"] },
    { locality: "General Emilio Aguinaldo", service: "BFP", name: "SFO4 Adriano B. Gubana - FIRE MARSHALL", address: "General Emilio Aguinaldo", email: "aguinaldo.firestation@gmail.com", tel: ["0921458593", "09662567730"] },
    { locality: "Magallanes", service: "BFP", name: "SFO4 Joselito P. Nuestro - FIRE MARSHALL", address: "Magallanes Cavite", email: "magallanes_firestation@yahoo.com", tel: ["0465296245", "09156021644"] },
    { locality: "Maragondon", service: "BFP", name: "SFO4 Alexander A. Doneza - FIRE MARSHALL", address: "Maragondon", email: "maragondon219@gmail.com", tel: ["0464121911", "09663753790"] },
    { locality: "Mendez", service: "BFP", name: "SFO4 Jorge C. Petil - FIRE MARSHALL", address: "J.P. Rizal St., Brgy. Poblacion 4, Mendez", email: "mendez_firestation@yahoo.com", tel: ["0464132237", "09772001102"] },
    { locality: "Naic", service: "BFP", name: "SINSP Armand Lee M. Andres - FIRE MARSHALL", address: "Brgy. Ibayo Silangan, Naic", email: "bfpnaic.official@yahoo.com", tel: ["0464121481", "09176797861"] },
    { locality: "Tagaytay City", service: "BFP", name: "CINSP Jackie Lou M. Maslang - FIRE MARSHALL", address: "Brgy. Bacolod St., Kaybagal South, Tagaytay City", email: "tagaytayfire@gmail.com", tel: ["0464831193", "09429898495"] },
    { locality: "Ternate", service: "BFP", name: "SFO3 Stephen C. Sancho II - FIRE MARSHALL", address: "Ternate Cavite", email: "Maragondon219@gmail.com", tel: ["0464191911", "09663759790"] },
    
    // PNP Data
    { locality: "Cavite City", service: "PNP", name: "PLTCOL Cristopher Caguimbal Guste (Police Station)", email: "cavitecitypolicestation150@gmail.com", tel: ["09989673349"] },
    { locality: "Kawit", service: "PNP", name: "PMAJ Lyman Ortillo San Juan (Police Station)", email: "kawit.mps2019@gmail.com", tel: ["09989673356", "09985985607"] },
    { locality: "Noveleta", service: "PNP", name: "PMAJ Rommel Batatan Carcellar (Police Station)", email: "noveleta_operation@yahoo.com", tel: ["09989673357", "09985985608"] },
    { locality: "Rosario", service: "PNP", name: "PLTCOL Ruther D. Saquilayan (Police Station)", email: "rosariompss1_2022@gmail.com", tel: ["09989673358", "09985985609"] },
    { locality: "Bacoor City", service: "PNP", name: "PLTCOL Gilbert Cajurao Cruz (Police Station)", email: "baccpsopn@gmail.com", tel: ["09989673348", "09985985594"] },
    { locality: "Imus City", service: "PNP", name: "PLTCOL Jose Junar Purificacion Alamo (Police Station)", email: "imuscityps@gmail.com", tel: ["09989673351", "09985985601"] },
    { locality: "Dasmariñas City", service: "PNP", name: "PLTCOL Juan Peñafiel Oruga Jr. (Police Station)", email: "dasmacityps@gmail.com", tel: ["09989673350"] },
    { locality: "Carmona", service: "PNP", name: "PMAJ Joseph Cruz Carlit (Police Station)", email: "carmonacavitepnp@gmail.com", tel: ["09989673359", "09985985610"] },
    { locality: "General Mariano Alvarez", service: "PNP", name: "PLTCOL Richard Dones Corpuz (Police Station)", email: "gmamps2019@yahoo.com", tel: ["09989673360", "09985965611"] },
    { locality: "Silang", service: "PNP", name: "PLTCOL Romulo Co Dela Rea (Police Station)", email: "silangpnp390@gmail.com", tel: ["09985985622", "09989673372"] },
    { locality: "General Trias City", service: "PNP", name: "PLTCOL Marlo Nillo Solero (Police Station)", email: "gen_trias_mps2000@yahoo.com", tel: ["09989673361", "09985985612"] },
    { locality: "Amadeo", service: "PNP", name: "PMAJ Gilbert H. Derla (Police Station)", email: "amadeopnp2022@gmail.com", tel: ["09989673365", "09985985620"] },
    { locality: "Indang", service: "PNP", name: "PMAJ Ernesto Baysan Caparas Jr. (Police Station)", email: "indang_mps@yahoo.com", tel: ["09989673367", "09985985617"] },
    { locality: "Tanza", service: "PNP", name: "PLTCOL Gerry Malibiran Laylo (Police Station)", email: "tanzamps@yahoo.com", tel: ["09989673362", "09985985613"] },
    { locality: "Trece Martires City", service: "PNP", name: "PMAJ Jonathan Abuel Asnan (Police Station)", email: "tmcpsparmuhrdd@gmail.com", tel: ["09989673354", "09985985606"] },
    { locality: "Alfonso", service: "PNP", name: "PMAJ Rommel Castillo Dimaala (Police Station)", email: "alfonsomps@yahoo.com", tel: ["09989673364", "09985985614"] },
    { locality: "General Emilio Aguinaldo", service: "PNP", name: "PCPT Marlon C. Escalante (Police Station)", email: "gea.aguinaldo2022@gmail.com", tel: ["09989673512", "09985985616"] },
    { locality: "Magallanes", service: "PNP", name: "PMAJ Norman Cuenca Catsao (Police Station)", email: "mps.magallanescavite@gmail.com", tel: ["09989673368", "09985985618"] },
    { locality: "Maragondon", service: "PNP", name: "PCPT Jerry Espina Flores (Police Station)", email: "maragondonmps@yahoo.com", tel: ["09989673369", "09985985619"] },
    { locality: "Mendez", service: "PNP", name: "PCPT Jean Noche Alagos (Police Station)", email: "mendez_mps@yahoo.com", tel: ["09989673370", "09985985620"] },
    { locality: "Naic", service: "PNP", name: "PLTCOL Resty E. Soriano (Police Station)", email: "naic_opn@yahoo.com", tel: ["09989673371", "09985985621"] },
    { locality: "Tagaytay City", service: "PNP", name: "PLTCOL Norman T. Ranon (Police Station)", email: "tagaytayccps_opn@yahoo.com", tel: ["09989673352", "09985985604"] },
    { locality: "Ternate", service: "PNP", name: "PMAJ Hilario Ganaden Lacaste Jr. (Police Station)", email: "ternatempsnew@gmail.com", tel: ["09989673374", "09985985623"] },

    // MDRRMO Data
    { locality: "Alfonso", service: "MDRRMO", name: "Alfonso MDRRMO", email: "MDRRMOALFONSO@GMAIL.COM", tel: ["0468906599"] },
    { locality: "Amadeo", service: "MDRRMO", name: "Amadeo MDRRMO", email: "MDRRMOAMADEO@GMAIL.COM", tel: ["0464833613", "0464301411"] },
    { locality: "Bacoor City", service: "MDRRMO", name: "Bacoor City MDRRMO", email: "BDRRMO@GMAIL.COM", tel: ["0464130188", "09171120291"] },
    { locality: "Carmona", service: "MDRRMO", name: "Carmona MDRRMO", email: "MDRRMO@CARMONA.GOV.PH", tel: ["0464849600", "0464310962", "09269707556"] },
    { locality: "Cavite City", service: "MDRRMO", name: "Cavite City CDRRMO", email: "EVORDAN512@GMAIL.COM, TANEARL5@GMAIL.COM", tel: ["0464771041", "0464171100"] },
    { locality: "Dasmariñas City", service: "MDRRMO", name: "Dasmariñas City CDRRMO", email: "DASMACITY.DRRMO@YAHOO.COM, RHEYKNOUR@GMAIL.COM", tel: ["0466866608", "0465131766"] },
    { locality: "General Emilio Aguinaldo", service: "MDRRMO", name: "Gen. Emilio Aguinaldo MDRRMO", email: "GEACDRRMO@GMAIL.COM", tel: ["0464097303", "0465136986"] },
    { locality: "General Mariano Alvarez", service: "MDRRMO", name: "Gen. Mariano Alvarez MDRRMO", email: "MDRRMO.LGUGMA@GMAIL.COM, GMAMDRRMO@GMAIL.COM", tel: ["0464710629", "09088500046"] },
    { locality: "Imus City", service: "MDRRMO", name: "Imus City CDRRMO", email: "IMUSCDRRMO@GMAIL.COM", tel: ["0468961003"] },
    { locality: "Indang", service: "MDRRMO", name: "Indang MDRRMO", email: "LDRRMO_KAWIT@YAHOO.COM.PH, VGMEDINAJR@YAHOO.COM", tel: ["0464439839", "0464339220"] },
    { locality: "Kawit", service: "MDRRMO", name: "Kawit LDRRMO", email: "LDRRMO_KAWIT@YAHOO.COM.PH", tel: ["0464191652", "0464240203"] },
    { locality: "Magallanes", service: "MDRRMO", name: "Magallanes MDRRMO", email: "DAPHIELEGASPI@YAHOO.COM.PH", tel: ["0464400722", "0464125725"] },
    { locality: "Maragondon", service: "MDRRMO", name: "Maragondon MDRRMO", email: "GRIELO05@GMAIL.COM, AD384563@GMAIL.COM", tel: ["0464436052", "09169961792"] },
    { locality: "Mendez", service: "MDRRMO", name: "Mendez MDRRMO", email: "JALMANZORII@YAHOO.COM", tel: ["0464166083"] },
    { locality: "Naic", service: "MDRRMO", name: "Naic MDRRMO", email: "NAICMDRRMO768@GMAIL.COM, JESTY_GONZALES768@YAHOO.COM", tel: ["09670164654", "0464330209"] },
    { locality: "Noveleta", service: "MDRRMO", name: "Noveleta MDRRMO", email: "JEPHOLAES@GMAIL.COM", tel: ["0464105725", "0464125725"] },
    { locality: "Rosario", service: "MDRRMO", name: "Rosario LDRRMO", email: "ROSARIO.LDRRMO@GMAIL.COM", tel: ["0464342564"] },
    { locality: "Silang", service: "MDRRMO", name: "Silang MDRRMO", email: "EUSEBIOKATH@GMAIL.COM, SILANGDRRMO@GMAIL.COM, DRRMOSILANGCAVITE@GMAIL.COM", tel: ["0464320526"] },
    { locality: "Tagaytay City", service: "MDRRMO", name: "Tagaytay City CDRRMO", email: "CYAYONG2000@YAHOO.COM", tel: ["0464143776"] },
    { locality: "Tanza", service: "MDRRMO", name: "Tanza MDRRMO", email: "JSANARIZ2360@GMAIL.COM, MDRRMOTANZA2016@GMAIL.COM", tel: ["0464830446", "0464045638"] },
    { locality: "Ternate", service: "MDRRMO", name: "Ternate MDRRMO", email: "OFFICIALMDRRMOTERNATE@GMAIL.COM", tel: ["0464355800", "0464371076"] },
    { locality: "Trece Martires City", service: "MDRRMO", name: "Trece Martires City CDRRMO", email: "PHENN_69@YAHOO.COM, ERSANDO.ELLEN@YAHOO.COM, KENT_SHIN@YAHOO.COM, CDRRMOTRECE@YAHOO.COM", tel: ["09201112811", "09309217317"] },

    // RHU Data 
    { locality: "Alfonso", service: "RHU", name: "Alfonso RHU", email: "WIN_331@YAHOO.COM", tel: ["0465220568"] },
    { locality: "Amadeo", service: "RHU", name: "Amadeo RHU", email: "RHUAMADEO@GMAIL.COM", tel: ["0464132316"] },
    { locality: "Bacoor City", service: "RHU", name: "Bacoor City CHO/RHU", email: "BACOORCHOTECH@GMAIL.COM", tel: ["0464353420"] },
    { locality: "Silang", service: "RHU", name: "Bulihan, Silang RHU", email: "RONIBERGARDE@GMAIL.COM", tel: ["0464439241"] },
    { locality: "Carmona", service: "RHU", name: "Carmona MHO/RHU", email: "MHO.CARMONA@GMAIL.COM", tel: ["0464302372"] },
    { locality: "Cavite City", service: "RHU", name: "Cavite City CHO/RHU", email: "CAVITECITY_CHO@YAHOO.COM", tel: ["0464310752"] },
    { locality: "Dasmariñas City", service: "RHU", name: "Dasmariñas City CHO/RHU", email: "CHO1_DASMA@YAHOO.COM, CVCRISTO@YAHOO.COM, DASMA_CHO2PIDSR@YAHOO.COM", tel: ["0464160809", "0464165638"] },
    { locality: "General Emilio Aguinaldo", service: "RHU", name: "Gen. Emilio Aguinaldo RHU", email: "RHU_AGUINALDO@YAHOO.COM, RHUAGUINALDO.BAILEN@GMAIL.COM", tel: ["0464231052"] },
    { locality: "General Trias City", service: "RHU", name: "Gen. Trias City RHU", email: "MESU_GENTRI@YAHOO.COM, DRJONLUSECO@YAHOO.COM, CESU.GENTRIAS@GMAIL.COM", tel: ["0464378184"] },
    { locality: "General Mariano Alvarez", service: "RHU", name: "GMA RHU", email: "GMARHU@YAHOO.COM", tel: ["0469702017"] },
    { locality: "Imus City", service: "RHU", name: "Imus City RHU", email: "IMUSCITYHEALTHTHREE@GMAIL.COM", tel: ["0464719734"] },
    { locality: "Indang", service: "RHU", name: "Indang RHU", email: "RHUINDANG@GMAIL.COM", tel: ["0464150286"] },
    { locality: "Kawit", service: "RHU", name: "Kawit RHU", email: "RHUMAGALLANES@GMAIL.COM", tel: ["0464436052", "09457108309"] },
    { locality: "Maragondon", service: "RHU", name: "Maragondon RHU", email: "MARAGONDONRHU@YAHOO.COM", tel: ["0464121232"] },
    { locality: "Mendez", service: "RHU", name: "Mendez RHU", email: "RHUMENDEZ@GMAIL.COM", tel: ["0464130601"] },
    { locality: "Naic", service: "RHU", name: "Naic RHU", email: "RHUNAIC@YAHOO.COM", tel: ["0464120296"] },
    { locality: "Noveleta", service: "RHU", name: "Noveleta RHU", email: "NOVELETARHU@GMAIL.COM", tel: ["0464381828"] },
    { locality: "Rosario", service: "RHU", name: "Rosario RHU", email: "RHU-ROSARIO@YAHOO.COM, RHUROSARIO@YAHOO.COM", tel: ["0464381800"] },
    { locality: "Silang", service: "RHU", name: "Silang RHU", email: "AJGARCIA.GUARIN@GMAIL.COM", tel: ["0464142925", "09175429100"] },
    { locality: "Tagaytay City", service: "RHU", name: "Tagaytay City CHO/RHU", email: "CHOTAGAYTAY@YAHOO.COM", tel: ["0464830604"] },
    { locality: "Tanza", service: "RHU", name: "Tanza RHU", email: "RHU.TANZA@GMAIL.COM", tel: ["0464186014"] },
    { locality: "Ternate", service: "RHU", name: "Ternate RHU", email: "RHUTERNATE@YAHOO.COM", tel: ["0464120164"] },
    { locality: "Trece Martires City", service: "RHU", name: "Trece Martires City CHO/RHU", email: "CHO_TRECECAVITE@YAHOO.COM", tel: ["0464190091"] },

    // HOSPITAL Data
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "Asia Medic Family Hospital and Medical Center (Private)", email: "AMFHMC.HUMANRESOURCE@GMAIL.COM, AMFHMC_BILLING@YAHOO.COM.PH, NTMATA@HOTMAIL.COM", tel: ["0464160720", "09336936205", "09295842537"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Bacoor Doctors Medical Center (Private)", email: "BACOORDOCTORS2010@YAHOO.COM", tel: ["0464166275", "09158673280"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Bacoor District Hospital (Public)", email: "BDH_62@YAHOO.COM", tel: ["0464180429", "0464183644"] },
    { locality: "Cavite City", service: "HOSPITAL", name: "Bautista Hospital", email: "ATIL_SEYER@YAHOO.COM", tel: ["0464310415"] },
    { locality: "Cavite City", service: "HOSPITAL", name: "Cavite Medical Center (Private)", email: "CAVITEMEDICALHR2016@GMAIL.COM", tel: ["09178417302", "09255504470"] },
    { locality: "Maragondon", service: "HOSPITAL", name: "Cavite Municipal Hospital (Public)", email: "CAVITEMUNICIPALHOSPITAL@YAHOO.COM", tel: ["0464120826"] },
    { locality: "Cavite City", service: "HOSPITAL", name: "Cavite Naval Hospital (Public)", email: "CAVITENAVALHOSPITAL@YAHOO.COM", tel: ["0464310469"] },
    { locality: "Carmona", service: "HOSPITAL", name: "Carmona Hospital and Medical Center (Private)", email: "CARMONAMEDICS@YAHOO.COM", tel: ["0464198110"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Crisostomo General Hospital (Private)", email: "CRISOSTOMOGENERALHOSPITAL@YAHOO.COM", tel: ["0464343195"] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "Dasmariñas City Medical Center (Private)", email: "DASMARINASCITYMEDICALCENTER@YAHOO.COM", tel: ["0464839000"] },
    { locality: "Cavite City", service: "HOSPITAL", name: "De La Cruz Maternity Hospital (Private)", email: "", tel: ["0464313185"] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "De La Salle University Medical Center (Private)", email: "WEBTEAM@DLSHSI.EDU.PH", tel: ["0464818000"] },
    { locality: "Alfonso", service: "HOSPITAL", name: "De La Salle - Dr. Rodolfo Poblete Memorial Hospital (Private)", email: "DCMPATHOLAB@YAHOO.COM", tel: ["0464151286"] },
    { locality: "General Trias City", service: "HOSPITAL", name: "Divine Grace Medical Center (Private)", email: "DGMC_HMO@YAHOO.COM, NSODGMC2018@GMAIL.COM", tel: ["09454890269", "09088983067"] },
    { locality: "Rosario", service: "HOSPITAL", name: "E. Contreras Medical Clinic (Private)", email: "CONTRERASMEDCLINIC@YAHOO.COM", tel: ["09173482812"] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "Emilio Aguinaldo College Medical Center Cavite (Private)", email: "INFECTIONCONTROL@EACMED.ORG.PH", tel: ["0464163010"] },
    { locality: "Silang", service: "HOSPITAL", name: "Estrella Hospital", email: "ESTRELLAHOSPITAL@GMAIL.COM", tel: ["0464140793"] },
    { locality: "Naic", service: "HOSPITAL", name: "First Filipino Saint Hospital (Private)", email: "FIRSTFILIPINOSAINTHOSPITAL@YAHOO.COM", tel: ["09175029406", "09175029403"] },
    { locality: "Trece Martires City", service: "HOSPITAL", name: "General Emilio Aguinaldo Memorial Hospital (Public)", email: "PHO1_CAVITE@YAHOO.COM", tel: ["0464190123"] },
    { locality: "General Trias City", service: "HOSPITAL", name: "General Trias Maternity and Pediatric Hospital (Private)", email: "GTMPH_07@YAHOO.COM", tel: ["09186330349"] },
    { locality: "General Trias City", service: "HOSPITAL", name: "Gentri Doctors Medical Center (Private)", email: "GENTRIDOCTORS@YAHOO.COM, GTDMC.INFECTIONCONTROL@GMAIL.COM", tel: ["09957217386", "09568330240", "09178859340"] },
    { locality: "General Trias City", service: "HOSPITAL", name: "Gentri Medical Center and Hospital Inc. (Private)", email: "LAI_CEA@YAHOO.COM", tel: ["09178491705"] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "GMH Hospital", email: "", tel: ["0464352624"] },
    { locality: "Tanza", service: "HOSPITAL", name: "JNRAL Family Corporation (Private)", email: "NEDYVIRAY@YAHOO.COM", tel: ["0464896398", "09173482812"] },
    { locality: "Kawit", service: "HOSPITAL", name: "Kawit Binakayan Hospital and Medical Center, Inc. (Private)", email: "BELGBHAYAG@YAHOO.COM", tel: ["09176584534"] },
    { locality: "Kawit", service: "HOSPITAL", name: "Kawit Kalayaan Hospital (Private)", email: "KAWITKALAYAAN@YAHOO.COM", tel: ["0466860124"] },
    { locality: "Trece Martires City", service: "HOSPITAL", name: "M.V. Santiago Medical Center (Private)", email: "MVSMC@YAHOO.COM, MVSMC_MEDICALAFFAIRS@YAHOO.COM", tel: ["0464191877"] },
    { locality: "Imus City", service: "HOSPITAL", name: "Medical Center MUS (Private)", email: "MCI.INFECTIONCONTROL@GMAIL.COM", tel: ["0464173300", "09224173300"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Metro South Medical Center (Private)", email: "G_O_MAGIC@YAHOO.COM", tel: ["0464773087", "09178178391"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Molino Doctors Hospital (Private)", email: "MOLINODOCTORSHOSPITAL@YAHOO.COM.PH", tel: ["0464023112", "09175028386"] },
    { locality: "Naic", service: "HOSPITAL", name: "Naic Doctors Hospital (Private)", email: "NAIC_DOCTORS@YAHOO.COM", tel: ["09228013899"] },
    { locality: "Naic", service: "HOSPITAL", name: "Naic Medicare Hospital", email: "NAICMEDICARE@YAHOO.COM", tel: ["0464120312", "09985513917"] },
    { locality: "Imus City", service: "HOSPITAL", name: "Ospital Ng Imus (Public)", email: "ERFMD789@YAHOO.COM", tel: ["0464198300"] },
    { locality: "Imus City", service: "HOSPITAL", name: "Our Lady of Pillar Medical Center (Private)", email: "BETHSANTOS_71@YAHOO.COM", tel: ["09164366141"] },
    { locality: "Rosario", service: "HOSPITAL", name: "Our Saviour Hospital (Private)", email: "JSUSANGARCIA@YAHOO.COM", tel: ["09258664533"] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "Pagamutan Ng Dasmariñas (Public)", email: "PAGAMUTANNGDASMA@GMAIL.COM", tel: ["0464350180"] },
    { locality: "Imus City", service: "HOSPITAL", name: "Paredes Primary Care Center (Private)", email: "PMC_0305@YAHOO.COM", tel: ["0464722326"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Prime Global Care Medical Center, Inc. (Private)", email: "PGMCI.ADMIN@GMAIL.COM", tel: ["09976146493"] },
    { locality: "Cavite City", service: "HOSPITAL", name: "Salamanca Memorial District Hospital (Public)", email: "DOSMDH_CAVITE1958@YAHOO.COM", tel: ["0464310652", "0464310552"] },
    { locality: "General Mariano Alvarez", service: "HOSPITAL", name: "San Jose Hospital and Medical Center", email: "SANJOSEHOSPITALGMA.COM", tel: ["0468557526"] },
    { locality: "Kawit", service: "HOSPITAL", name: "San Pedro Calunsod Medical Center, Inc. (Private)", email: "SPCMC.KAWIT@GMAIL.COM", tel: ["0464581176"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "Southeast Asian Medical Center (Private)", email: "MEDICAL.DIRECTOR@SOUTHEASTASIANHOSPITAL.COM, AILEEN.DELEON@SOUTHEASTASIANHOSPITAL.COM, JOSIE.DEVERA@SOUTHEASTASIANHOSPITAL.COM", tel: [] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "South City Hospital and Medical Center (Private)", email: "", tel: ["0464198240", "022499100"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "St. Dominic Medical Center (Private)", email: "REVILOBATARIV@YAHOO.COM", tel: ["09256001175"] },
    { locality: "Noveleta", service: "HOSPITAL", name: "St. Martin Maternity & Pediatric Hospital (Private)", email: "ARNDDZENAROSA@YAHOO.COM, SMMPH.04@GMAIL.COM", tel: ["0464381112", "09209054268"] },
    { locality: "Silang", service: "HOSPITAL", name: "St. Mazenod Hospital, Inc. (Private)", email: "MIGUELARMHELJAY@GMAIL.COM", tel: ["09209567072"] },
    { locality: "Bacoor City", service: "HOSPITAL", name: "St. Michael Medical Hospital (Private)", email: "STMICHAELHOSPITAL.COM", tel: [] },
    { locality: "Dasmariñas City", service: "HOSPITAL", name: "St. Paul Hospital Cavite (Private)", email: "SPHCAVITE.2007@GMAIL.COM", tel: ["09174888259"] },
    { locality: "Silang", service: "HOSPITAL", name: "Silang Doctors Hospital", email: "SILANG.DOCTORS@YAHOO.COM", tel: ["09209827565", "09777372095"] },
    { locality: "Silang", service: "HOSPITAL", name: "Silang Specialists Medical Center (Private)", email: "SSMC_PHILHEALTH@YAHOO.COM, SILANGSPECIALISTS.MEDICALCENTER@YAHOO.COM", tel: ["0464829999", "09257210216", "09235752731"] },
    { locality: "Tagaytay City", service: "HOSPITAL", name: "Tagaytay Medical Center (Private)", email: "BILLING.TAGAYTAYMED@GMAIL.COM", tel: ["09087835384"] },
    { locality: "Tanza", service: "HOSPITAL", name: "Tanza Family General Hospital (Private)", email: "TFGHCAVITE@YAHOO.COM", tel: ["0464840080"] },
    { locality: "Silang", service: "HOSPITAL", name: "Velasco Hospital (Private)", email: "VELAZCOHOSPITAL@YAHOO.COM", tel: ["0464140280"] },

    // Coast Guard Data
    { locality: "Tanza", service: "COASTGUARD", name: "CGS CAVITE", address: "Brgy. Capipiza, Tanza, Cavite", email: "cgscavite@gmail.com", tel: ["09171653113"] },
    { locality: "Bacoor City", service: "COASTGUARD", name: "CGSS BACOOR", address: "Brgy. Talaba II, Bacoor, Cavite", email: "cgssbacoor29@gmail.com", tel: ["09178435896"] },
    { locality: "Cavite City", service: "COASTGUARD", name: "CGSS CAVITE CITY (Akasya)", address: "Brgy. 49M, Akasya, Bagong Pook, San Antonio, Cavite City", email: "cgsscavitecity@gmail.com", tel: ["09637252318"] },
    { locality: "Cavite City", service: "COASTGUARD", name: "CGSS CAVITE CITY (Bidbid)", address: "Brgy. 30. Bidbid, Caridad, Cavite City", email: "cgsscavitecity@gmail.com", tel: ["09637252318"] },
    { locality: "General Trias City", service: "COASTGUARD", name: "CGSS CENTRAL CAVITE", address: "1896 Poblacion, City of General Trias, Cavite", email: "cgsscentralcavite2021@gmail.com", tel: ["09273024165"] },
    { locality: "Cavite City", service: "COASTGUARD", name: "CGSS CORREGIDOR", address: "Corregidor Island, Cavite City, Cavite", email: "coastguardcorregidor@gmail.com", tel: ["09057681932"] },
    { locality: "Kawit", service: "COASTGUARD", name: "CGSS KAWIT", address: "Brgy. Pulvorista, Kawit, Cavite", email: "subkawit123@gmail.com", tel: ["09682352749"] },
    { locality: "Maragondon", service: "COASTGUARD", name: "CGSS MARAGONDON", address: "Sitio Patungan, Brgy. Sta Mercedes, Maragondon, Cavite", email: "cgssmaragondon@gmail.com", tel: ["09765120802"] },
    { locality: "Naic", service: "COASTGUARD", name: "CGSS NAIC", address: "Brgy. Bucana, Malaki, Naic, Cavite", email: "cgssnaic2023@gmail.com", tel: ["09455092796"] },
    { locality: "Noveleta", service: "COASTGUARD", name: "CGSS NOVELETA", address: "Brgy. San Rafael IV, Noveleta, Cavite", email: "cgssnoveletacavite@gmail.com", tel: ["09179348287"] },
    { locality: "Rosario", service: "COASTGUARD", name: "CGSS ROSARIO", address: "Brgy. Sapa II, Rosario, Cavite", email: "cgssrosario17052010@gmail.com", tel: ["09953783034"] },
    { locality: "Tanza", service: "COASTGUARD", name: "CGSS TANZA", address: "Brgy. Amaya VII, Tanza, Cavite", email: "cgsstanzacavite@gmail.com", tel: ["09167932511"] },
    { locality: "Ternate", service: "COASTGUARD", name: "CGSS TERNATE", address: "Brgy. San Jose IV, Ternate, Cavite", email: "cgssternate2023@gmail.com", tel: ["09367879610"] },
    { locality: "General Emilio Aguinaldo", service: "COASTGUARD", name: "Coast Guard Outpost BAILEN", address: "Pob 1, Gen. E. Aguinaldo, Cavite", email: "cgoogenerablemilioaguinaldo@gmail.com", tel: ["09478846997"] },
    { locality: "Dasmariñas City", service: "COASTGUARD", name: "Coast Guard Outpost DASMARIÑAS", address: "Brgy. Buhisan Lankaan II, Dasmariñas, Cavite", email: "cgssdasmariñas@gmail.com", tel: ["09299741829"] },
    { locality: "Imus City", service: "COASTGUARD", name: "Coast Guard Outpost IMUS", address: "Anabu-1B, Imus City, Cavite", email: "coastguardsubstationimus@gmail.com", tel: ["09682436827"] }
];


// --- 2. DOM ELEMENT REFERENCES ---
const form = document.getElementById('initial-search-form');
const municipalitySelect = document.getElementById('municipality');
const initialServiceSelect = document.getElementById('service-type-initial');
const resultsContainer = document.getElementById('results-container');

let currentMunicipality = '';
let currentResults = []; 

const municipalities = [...new Set(emergencyData.map(item => item.locality))].sort();
const serviceTypes = [...new Set(emergencyData.map(item => item.service))].sort();


// --- 3. UTILITY FUNCTIONS ---

/**
 * Populates the municipality and service type dropdowns based on the data.
 */
function populateDropdowns() {
    municipalities.forEach(mun => {
        const option = document.createElement('option');
        option.value = mun;
        option.textContent = mun;
        municipalitySelect.appendChild(option);
    });

    const serviceOptionsHTML = serviceTypes.map(type => 
        `<option value="${type}">${type}</option>`
    ).join('');
    
    initialServiceSelect.innerHTML += serviceOptionsHTML;
}

/**
 * Generates the HTML string for a single contact card.
 */
function createFlashcardHTML(contact) {
    
    // Build the Phone Links (Red Buttons)
    const phoneButtons = (contact.tel || []).map(num => {
        const cleanNum = num.replace(/[^0-9+]/g, '');
        return `<a href="tel:${cleanNum}" class="phone-link"><i class="fas fa-phone-alt"></i> ${num} (Call)</a>`;
    }).join('');

    // --- FINAL UNIFIED EMAIL LOGIC ---
    let emailButtons = '';
    const emails = (contact.email || '').split(',').map(e => e.trim()).filter(e => e); 

    emails.forEach(email => {
        // Use the hardcoded Gmail link for every email address
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        
        // Use the clean label "Send Email" and the class 'universal-email' for blue color
        emailButtons += `<a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="email-link universal-email"><i class="fas fa-envelope"></i> Send Email (${email})</a>`;
    });
    // ------------------------------------

    
    let statusTag = '';
    let nameDisplay = contact.name;
    if (contact.service === 'HOSPITAL') {
        if (contact.name.includes('(Private)')) {
            statusTag = `<span class="service-tag" style="background-color: #FBEFEA; color: #D35400;">Private</span>`;
            nameDisplay = contact.name.replace(/\s\(Private\)/g, ''); 
        } else if (contact.name.includes('(Public)')) {
            statusTag = `<span class="service-tag" style="background-color: #E8EAF6; color: #3F51B5;">Public</span>`;
            nameDisplay = contact.name.replace(/\s\(Public\)/g, '');
        }
    }
    
    const locationInfo = contact.locality || 'Cavite';

    return `
        <div class="flashcard">
            <div class="card-header-bg">
                <h3><i class="fas fa-building"></i> ${nameDisplay}</h3>
            </div>
            <div class="card-body">
                <p class="locality">
                    <i class="fas fa-map-marker-alt icon" style="color: #666;"></i> ${locationInfo} ${statusTag}
                </p>
                <p><strong>Service Type:</strong> <span class="service-tag" style="background-color: #E0F7FA; color: #00BCD4;">${contact.service}</span></p>
                
                ${contact.address ? `<p><strong>Address:</strong> <i class="fas fa-location-arrow icon"></i> ${contact.address}</p>` : ''}

                <div class="contact-group">
                    ${phoneButtons}
                    ${emailButtons}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the results to the DOM.
 */
function renderResults(results) {
    resultsContainer.innerHTML = '';
    
    // Get display variables for the NO RESULTS message
    const currentMunicipality = municipalitySelect.value;
    const selectedService = initialServiceSelect.value;
    const serviceDisplay = selectedService ? `${selectedService} Contacts` : 'All Essential Services';
    const munDisplay = currentMunicipality ? ` in <strong>${currentMunicipality}</strong>` : '';


    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <p class="status-message">
                Sorry, no <strong>${serviceDisplay.toLowerCase()}</strong> contacts were found ${munDisplay}. Please try another municipality or change the service type.
            </p>
        `;
        return;
    }

    // Render the cards directly
    const cardsHtml = results.map(createFlashcardHTML).join('');
    resultsContainer.innerHTML += cardsHtml;
}


// --- 4. EVENT HANDLERS ---
function handleSearch(event) {
    event.preventDefault();

    const selectedMunicipality = municipalitySelect.value;
    const initialSelectedService = initialServiceSelect.value;

    if (!selectedMunicipality) {
        alert("Please select a City / Municipality in Cavite.");
        return;
    }

    currentMunicipality = selectedMunicipality;
    
    let filteredResults = emergencyData.filter(item => 
        item.locality.toLowerCase() === selectedMunicipality.toLowerCase()
    );

    if (initialSelectedService) {
        filteredResults = filteredResults.filter(item => 
            item.service.toLowerCase() === initialSelectedService.toLowerCase()
        );
    }

    currentResults = filteredResults;
    renderResults(currentResults);
}


// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
    form.addEventListener('submit', handleSearch);
});