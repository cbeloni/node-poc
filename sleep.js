function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}

//demo();

const demo2 = async (iterator) => {
    for (let i = 0; i < iterator; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}

//demo2(5)

const demo3 = async (i) => {
    await sleep(i * 1000); 
    console.log('Done');
}

demo3(5)