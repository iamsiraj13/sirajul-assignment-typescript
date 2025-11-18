### Interface vs Type (TypeScript)

- **Extends / Implements**: Interface সাধারণত `extends` বা `implements` এর মাধ্যমে ব্যবহার হয়, Type-ও extend করা যায় তবে কম ব্যবহৃত।
- **Declaration Merging**: Interface একাধিকবার ঘোষণা করলে merge হয়, Type-এ তা সম্ভব নয়।
- **Complex Types**: Type দিয়ে union, tuple, mapped type সহ অনেক complex structure বানানো যায়, Interface শুধু object structure-এর জন্য ভালো।
- **Compatibility**: অনেক ক্ষেত্রে Type ও Interface একে অপরের মতো কাজ করতে পারে, তবে Interface বেশি Object-oriented Design এর জন্য ব্যবহৃত হয়।
