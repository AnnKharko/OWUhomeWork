// let chance = 0.2;
// function wakeUp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Time to wake up');
//             Math.random() > chance 
//             ? resolve('I have already woken up, and I am preparing breakfast for my daughter')
//             : reject('I oversleep')
//         }, 1000)

//     })
// }

//   function takeChildToSchool(){
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('We go to to school')
//             Math.random() > chance 
//             ? resolve('The child is already in school')
//             : reject('The child  is studying at home today')
//         }, 1000)
//       })
//   }


//   function cleanTheRoom() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('I go to clean the room');
//             Math.random() > chance 
//             ? resolve('the house is clean')
//             : reject('I dont have time to clean the house')
//         }, 2000)
//       })
//   }

//   function toTheGroceryStore() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('I go to the grocery store');
//             Math.random() > chance 
//             ? resolve('I bought everything I needed')
//             : reject(' no products')
//         }, 2000)
//       })
//    }


//    function cook() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('I start cooking');
//             Math.random() > chance 
//             ? resolve('Eat already cooked')
//             : resolve('I have no products to cook')
//       },1000)
//    })  
// }
   
//    function pickUpTheChildFromSchool() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('It\'s time to pick up the child from school');
//            // Math.random() > chance 
//              resolve('Child at home')
    
//         }, 2000)
//       })
//   }

//   function doHomework() {
//       return new Promise((resolve) => {
//        setTimeout(() => {
//         Math.random() > chance 
//         ? resolve('Great! I did it')
//         : resolve('The task is not yet complete')
//        }, 3000)
//       })
//   }

//   function putChildToSleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance 
//             ? resolve('The child is slipping. I can finish hw')
//             : reject('Do not sleep and drink coffe!')
//         }, 1000)
//       })

//   }
//   function goToSleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance 
//             ? resolve('Good night!')
//             : reject('Do not sleep and drink coffe!')
//         }, 1000)
//       })
//   }

// wakeUp()
// .then((result) => {
//     console.log(result);
//     console.log('The children is collected to school');
//     return takeChildToSchool()
// })
// .then ((result) => {
//     console.log(result);
//     return cleanTheRoom()
// })
// .then((result) => {
//     console.log(result);
//     return cook()
//  })
// .then((result) => {
//     console.log(result);
//  if (result === 'I have no products to cook') { 
//     return toTheGroceryStore()}
//    return pickUpTheChildFromSchool()
//  })
// .then ((result) => {
//     console.log(result);
//     if (result === 'I bought everything I needed') {
//         return pickUpTheChildFromSchool()
//     }
//     return 'I\'m ready to do my homework';
// })
// .then((result) => {
//     console.log(result);
//     return doHomework()
//  })
//  .then((result) => {
//     console.log(result);
//     if (result === 'The task is not yet complete') {
//         return putChildToSleep()
//     }
//     return goToSleep()
//  })
//  .then((result) => {
//     console.log(result);
//     if (result === 'The child is slipping. I can finish hw')  {
//         return doHomework()
//     }
//     return 'zzzzzzzzz'
//  })
//  .then((result) => {
//     console.log(result);
//     if (result === 'Great! I did it') {
//         return goToSleep()
//     }
//     if (result === 'The task is not yet complete') {
//         return 'Do not sleep and study!'
//     }
//     return 'ZZZZZZZ'
//  })
//  .then((result) => {
//     console.log(result);
//  })
// .catch(error => {
//     console.log(`Error : ${error}`);
// })


//================with collback=======

// let chance = 0.2;
// function wakeUp(chance, cb) {
//     console.log('Time to wake up');
//         setTimeout(() => {
//            if (Math.random() > chance) { 
//              cb( null, 'I have already woken up, and I am preparing breakfast for my daughter')
//            } else{ 
//                cb('I oversleep', null)}  
//         }, 1000)

// }

// function takeChildToSchool(chance, cb){
//             setTimeout(() => {
//                 console.log('We go to to school')
//                 Math.random() > chance 
//                 ? cb(null, 'The child is already in school')
//                 : cb('The child  is studying at home today', null)
//             }, 1000)
//       }
    
    
//       function cleanTheRoom(chance, cb) {
//             setTimeout(() => {
//                 console.log('I go to clean the room');
//                 Math.random() > chance 
//                 ? cb(null, 'the house is clean')
//                 : cb('I dont have time to clean the house')
//             }, 2000)
//       }
    
//       function toTheGroceryStore(chance, cb) {
//             setTimeout(() => {
//                 console.log('I go to the grocery store');
//                 Math.random() > chance 
//                 ? cb(null,'I bought everything I needed')
//                 : cb('no products', null)
//             }, 2000)
//        }
    
    
//        function cook(chance, cb) {
//             setTimeout(() => {
//                 console.log('I start cooking');
//                 Math.random() > chance 
//                 ? cb(null, 'Eat already cooked')
//                 : cb('I have no products to cook', null)
//           },1000)
    
//     }
       
//        function pickUpTheChildFromSchool(chance, cb) {
//             setTimeout(() => {
//                 console.log('It\'s time to pick up the child from school');
//                // Math.random() > chance 
//                  cb(null, 'Child at home')
//             }, 2000)
//       }
    
//       function doHomework(chance, cb) {
//            setTimeout(() => {
//                console.log('I doing homework');
//             Math.random() > chance 
//             ? cb(null, 'Great! I did it')
//             : cb('The task is not yet complete', null)
//            }, 3000)
//       }
    
//       function putChildToSleep(chance, cb) {
//             setTimeout(() => {
//                 Math.random() > chance 
//                 ? cb(null, 'The child is slipping. I can finish hw')
//                 : cb('Do not sleep and drink coffe!',null)
//             }, 1000)    
//       }
//       function goToSleep(chance, cb) {
//             setTimeout(() => {
//                 Math.random() > chance 
//                 ? cb(null, 'Good night!')
//                 : cb('Do not sleep and drink coffe!', null)
//             }, 1000)
//       }

// wakeUp(chance,(err, data) => { 
//    if (err) {
//        console.log(`Error : ${err}`)
//     } else { 
//      console.log(data);
//      takeChildToSchool(chance,(err, data) => {
//         if (err) {
//             console.log(`Error : ${err}`)
//          } else { 
//           console.log(data);
//           cleanTheRoom(chance,(err, data) => {
//             if (err) {
//                 console.log(`Error : ${err}`)
//              } else { 
//               console.log(data);
//               cook(chance,(err, data) => {
//                 if (err) {
//                     console.log(`Error : ${err}`)
//                     toTheGroceryStore(chance,(err, data) => {
//                         if (err) {
//                             console.log(`Error : ${err}`)
//                          } else { 
//                           console.log(data);
//                             console.log("!!!!!!!!!!!!");
                            
//                          }
//                     })
//                  } else { 
//                   console.log(data);
//                   pickUpTheChildFromSchool(chance,(err, data) => {
//                     if (err) {
//                         console.log(`Error : ${err}`)
//                      } else { 
//                       console.log(data);
//                       doHomework(chance,(err, data) => {
//                         if (err) {
//                             console.log(`Error : ${err}`)
//                             putChildToSleep(chance,(err, data) => {
//                                 if (err) {
//                                     console.log(`Error : ${err}`)
//                                  } else { 
//                                   console.log(data);
//                                   doHomework(chance,(err, data) => {
//                                     if (err) {
//                                         console.log(`Error : ${err}`);
//                                         console.log('Do not sleep and study!');
//                                         return
//                                      } else { 
//                                       console.log(data);
//                                       goToSleep(chance,(err, data) => {
//                                         if (err) {
//                                             console.log(`Error : ${err}`)
//                                          } else { 
//                                           console.log(data);
//                                          }
//                                       })
//                                      }
//                                   })
//                                  } 
//                             })
//                          } else { 
//                           console.log(data);
//                           goToSleep(chance,(err, data) => {
//                             if (err) {
//                                 console.log(`Error : ${err}`)
//                                 return 
//                              } else { 
//                               console.log(data);
//                              }
//                           })
//                          }
//                       })
//                      }
//                   })
//                  }
//               })
//              }
//             })
//          }
//      })
//     }
// }) 






//================== після !!!!!!!!!!!!!   додано ще розвиток подій
/*
let chance = 0.2;
function wakeUp(chance, cb) {
    console.log('Time to wake up');
        setTimeout(() => {
           if (Math.random() > chance) { 
             cb( null, 'I have already woken up, and I am preparing breakfast for my daughter')
           } else{ 
               cb('I oversleep', null)}  
        }, 1000)

}

function takeChildToSchool(chance, cb){
            setTimeout(() => {
                console.log('We go to to school')
                Math.random() > chance 
                ? cb(null, 'The child is already in school')
                : cb('The child  is studying at home today', null)
            }, 1000)
      }
    
    
      function cleanTheRoom(chance, cb) {
            setTimeout(() => {
                console.log('I go to clean the room');
                Math.random() > chance 
                ? cb(null, 'the house is clean')
                : cb('I dont have time to clean the house')
            }, 2000)
      }
    
      function toTheGroceryStore(chance, cb) {
            setTimeout(() => {
                console.log('I go to the grocery store');
                Math.random() > chance 
                ? cb(null,'I bought everything I needed')
                : cb('no products', null)
            }, 2000)
       }
    
    
       function cook(chance, cb) {
            setTimeout(() => {
                console.log('I start cooking');
                Math.random() > chance 
                ? cb(null, 'Eat already cooked')
                : cb('I have no products to cook', null)
          },1000)
    
    }
       
       function pickUpTheChildFromSchool(chance, cb) {
            setTimeout(() => {
                console.log('It\'s time to pick up the child from school');
                // Math.random() > chance 
                 cb(null, 'Child at home')
                // : cb('Grandmother will pick up the child from school')
            }, 2000)
      }
    
      function doHomework(chance, cb) {
           setTimeout(() => {
               console.log('I doing homework');
            Math.random() > chance 
            ? cb(null, 'Great! I did it')
            : cb('The task is not yet complete', null)
           }, 3000)
      }
    
      function putChildToSleep(chance, cb) {
            setTimeout(() => {
                Math.random() > chance 
                ? cb(null, 'The child is slipping. I can finish hw')
                : cb('Do not sleep and drink coffe!',null)
            }, 1000)    
      }
      function goToSleep(chance, cb) {
            setTimeout(() => {
                Math.random() > chance 
                ? cb(null, 'Good night!')
                : cb('Do not sleep and drink coffe!', null)
            }, 1000)
      }

wakeUp(chance,(err, data) => { 
   if (err) {
       console.log(`Error : ${err}`)
    } else { 
     console.log(data);
     takeChildToSchool(chance,(err, data) => {
        if (err) {
            console.log(`Error : ${err}`)
         } else { 
          console.log(data);
          cleanTheRoom(chance,(err, data) => {
            if (err) {
                console.log(`Error : ${err}`)
             } else { 
              console.log(data);
              cook(chance,(err, data) => {
                if (err) {
                    console.log(`Error : ${err}`)
                    toTheGroceryStore(chance,(err, data) => {
                        if (err) {
                            console.log(`Error : ${err}`)
                         } else { 
                          console.log(data);
                            console.log("!!!!!!!!!!!!!!!");   //=============================
                            pickUpTheChildFromSchool(chance,(err, data) => {
                                if (err) {
                                    console.log(`Error : ${err}`)
                                 } else { 
                                  console.log(data);
                                  doHomework(chance,(err, data) => {
                                    if (err) {
                                        console.log(`Error : ${err}`)
                                        putChildToSleep(chance,(err, data) => {
                                            if (err) {
                                                console.log(`Error : ${err}`)
                                             } else { 
                                              console.log(data);
                                              doHomework(chance,(err, data) => {
                                                if (err) {
                                                    console.log(`Error : ${err}`);
                                                    console.log('Do not sleep and study!');
                                                    return
                                                 } else { 
                                                  console.log(data);
                                                  goToSleep(chance,(err, data) => {
                                                    if (err) {
                                                        console.log(`Error : ${err}`)
                                                     } else { 
                                                      console.log(data);
                                                     }
                                                  })
                                                 }
                                              })
                                             } 
                                        })
                                     } else { 
                                      console.log(data);
                                      goToSleep(chance,(err, data) => {
                                        if (err) {
                                            console.log(`Error : ${err}`)
                                            return 
                                         } else { 
                                          console.log(data);
                                         }
                                      })
                                     }
                                  })
                                 }
                              })
                            //=========
                         }
                    })
                 } else { 
                  console.log(data);
                  pickUpTheChildFromSchool(chance,(err, data) => {
                    if (err) {
                        console.log(`Error : ${err}`)
                     } else { 
                      console.log(data);
                      doHomework(chance,(err, data) => {
                        if (err) {
                            console.log(`Error : ${err}`)
                            putChildToSleep(chance,(err, data) => {
                                if (err) {
                                    console.log(`Error : ${err}`)
                                 } else { 
                                  console.log(data);
                                  doHomework(chance,(err, data) => {
                                    if (err) {
                                        console.log(`Error : ${err}`);
                                        console.log('Do not sleep and study!');
                                        return
                                     } else { 
                                      console.log(data);
                                      goToSleep(chance,(err, data) => {
                                        if (err) {
                                            console.log(`Error : ${err}`)
                                         } else { 
                                          console.log(data);
                                         }
                                      })
                                     }
                                  })
                                 } 
                            })
                         } else { 
                          console.log(data);
                          goToSleep(chance,(err, data) => {
                            if (err) {
                                console.log(`Error : ${err}`)
                                return 
                             } else { 
                              console.log(data);
                             }
                          })
                         }
                      })
                     }
                  })
                 }
              })
             }
            })
         }
     })
    }
}) 
*/



//========================== with async await ================

 const chance = 0.3;
function wakeUp(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to wake up');
            Math.random() > chance 
            ? resolve('I have already woken up, and I am preparing breakfast for my daughter')
            : reject('I oversleep')
        }, 1000)

    })
}

  function takeChildToSchool(chance){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We go to to school')
            Math.random() > chance 
            ? resolve('The child is already in school')
            : reject('The child  is studying at home today')
        }, 1000)
      })
  }


  function cleanTheRoom(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I go to clean the room');
            Math.random() > chance 
            ? resolve('the house is clean')
            : reject('I dont have time to clean the house')
        }, 2000)
      })
  }

  function toTheGroceryStore(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I go to the grocery store');
            Math.random() > chance 
            ? resolve('I bought everything I needed')
            : reject(' no products')
        }, 2000)
      })
   }


   function cook(chance) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('I start cooking');
            Math.random() > chance 
            ? resolve('Eat already cooked')
            : resolve('I have no products to cook')
      },1000)
   })  
}
   
   function pickUpTheChildFromSchool() {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('It\'s time to pick up the child from school');
           // Math.random() > chance 
             resolve('Child at home');
        }, 2000)
      })
  }

  function doHomework(chance) {
      return new Promise((resolve) => {
       setTimeout(() => {
        Math.random() > chance 
        ? resolve('Great! I did it')
        : resolve('The task is not yet completed')
       }, 3000)
      })
  }

  function putChildToSleep(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance 
            ? resolve('The child is slipping. I can finish hw')
            : reject('Do not sleep and drink coffe!')
        }, 1000)
      })

  }
  function goToSleep(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance 
            ? resolve('Good night!')
            : reject('Do not sleep and drink coffe!')
        }, 1000)
      })
  }

 async function day(chance) {
     try { 
     const wakeup = await wakeUp(chance);
     console.log(wakeup);
     const toSchool = await takeChildToSchool(chance);
     console.log(toSchool);
     const clean = await cleanTheRoom(chance);
     console.log(clean);
     const food = await cook(chance);
     if (food === 'I have no products to cook') {
         console.log(food);
         const shop = await toTheGroceryStore(chance)
         console.log(shop);
     } else {console.log(food)};
     
     const picUpChild = await pickUpTheChildFromSchool();
     console.log(picUpChild);
     const hw = await doHomework(chance);
     console.log(hw);
    if (hw === 'The task is not yet completed') {
        const childToSleep = await putChildToSleep(chance);
        console.log(childToSleep);
        const againHw = await doHomework(chance);
        console.log(againHw);
        if (againHw === 'The task is not yet completed') {
            const result = 'Do not sleep and study!'
            console.log(result);
        } else {
         const sleap = await goToSleep(chance);
         console.log(sleap);
        }
    } else { 
    const sleap = await goToSleep(chance);
    console.log(sleap);
    }
    } catch(err) {
     console.log(err);
    }
 }

 day(chance);

