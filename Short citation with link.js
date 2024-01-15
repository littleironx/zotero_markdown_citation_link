{
    "translatorID":"04623cf0-313c-11df-9aae-0800200c9a66",
    "translatorType":2,
    "label":"ZotSelect Link",
    "creator":"littleiron",
    "target":"html",
    "minVersion":"2.0",
    "maxVersion":"",
    "priority":200,
    "inRepository":false,
    "displayOptions":{"exportCharset":"UTF-8"},
    "lastUpdated":"2024-01-15 10:43:00"
    }

    function doExport() {
        var item;
        while(item = Zotero.nextItem()) {
            var library_id = item.libraryID ? item.libraryID : 0;
    
            var creatorsS = item.creators[0].lastName;
            if (item.creators.length > 2)
                creatorsS += " et al.";
            else if (item.creators.length == 2)
                creatorsS += " & " + item.creators[1].lastName;
    
            var date = Zotero.Utilities.strToDate(item.date);
            var dateS = (date.year) ? date.year : item.date;
    
            var link = "zotero://select/items/" + library_id + "_" + item.key;
            var linkText = creatorsS + "(" + dateS + ")";
    
            Zotero.write("[" + linkText + "](" + link + ")\n");
        }
    }
    