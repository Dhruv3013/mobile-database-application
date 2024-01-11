db.LocationsInfo.insertMany ([
                              {Address: "150 Clementine Drive", Telephone:"905.487.1254", Email: "Midtown123", Amenities: [{AmenityName: "Sauna"},
                                                                                                                           {AmenityName: "Pool"},
                                                                                                                           {AmenityName: "Green Zone"}] },
                              {Address: "190 Mclaughlin Road", Telephone:"905.485.4582", Email: "Cabbageetown"}])
                              
db.Locations.insertMany ([
                           {LocatinId: 142, Name: "Midtown", TimesVisited: 15, Address: "150 Clementine Drive" },
                           {LocatinId: 157, Name: "Cabagetown", TimesVisited: 8, Address: "190 Mclaughlin Road"}])
                           






                           
db.LocationsInfo.find({})
db.Locations.find({})