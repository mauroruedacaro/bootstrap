const personAzkaban = ['Marsge', 'Harry', 'Vernon', 'Petunia', 'Stan', 'Ron', 'Hermione', 'Lupin', 'Sirius', 'Buckbeak'];
let personsHpinit = ['Dobby', 'Harry', 'Vernon', 'Fred', 'George', 'Ron', 'Molly', 'Arthur', 'Lockhart', 'Lucius'];


for (i=0; i<10; i++)
{
    if (personAzkaban[i] != personsHpinit[i]) 
    {
        // personsHpinit.shift();
        // personsHpinit.unshift(personAzkaban[i]);
        const deleted = personsHpinit.splice(i, i+1,personAzkaban[i]);
        document.write (i,personsHpinit[i],personAzkaban[i]);
        

    } 
}
console.log (`El resutlado es ${personsHpinit}`);
