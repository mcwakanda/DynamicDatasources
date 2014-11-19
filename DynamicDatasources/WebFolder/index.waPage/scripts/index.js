
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		WAF.dataSource.create({
            'id' : 'people', // datasource ID
            'binding': 'Person' // name of the datastore class
            // if data-source-type is omitted, 'dataclass' type is used by default
        });
        
        sources.people.all(); //will error with "Cannot read property 'query' of undefined
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
