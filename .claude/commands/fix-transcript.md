---
description: Review and fix transcript errors for a given episode number
---

Please help me review and fix the transcript for episode {{arg1}}.

**Task Overview:**
1. Read the JSON transcript file at `src/_transcripts/{{arg1}}.json`
2. Carefully review the entire transcript for errors
3. Present all findings to me for review
4. After I confirm, fix ONLY the JSON file (I'll regenerate the VTT separately)

**Types of errors to look for:**

1. **Speaker names** - Verify the speakers object has proper names:
   - Should be: `"spk_0": "Eoin"` and `"spk_1": "Luciano"`
   - NOT generic labels like: `"spk_0": "spk_0"` or `"spk_1": "Speaker 1"`
   - Check the "speakers" object at the top of the JSON file

2. **Transcription errors** - Words that sound similar but are contextually wrong:
   - Example: "IQ" → "a queue" (in context of SQS/message queues)
   - Example: "overread" → "overhead" (in context of performance)
   - Example: "bottle rocket" → "Bottlerocket" (Amazon's container OS)

3. **Technical term corrections:**
   - AWS service names (proper capitalization and spacing)
   - Product names (e.g., "SageMaker" not "Sage Maker")
   - Technical acronyms (ECS, EC2, VPC, etc.)
   - Programming terms and frameworks

4. **Formatting issues:**
   - Repeated segments at the end (common in outros)
   - Glitchy text or mixed character sets
   - Extra spaces or punctuation errors
   - Transcript artifacts that don't make sense

**Process:**
1. Read the entire transcript thoroughly
2. Identify ALL issues (don't stop at just a few)
3. Present findings in a clear list with line numbers
4. Ask for my confirmation before making changes
5. Apply only the confirmed fixes to the JSON file
6. After all fixes are complete, remind me to regenerate the VTT file

**Important notes:**
- Only modify `src/_transcripts/{{arg1}}.json`
- Do NOT modify or generate the VTT file
- Preserve the exact JSON structure (speakers, segments with speakerLabel, start, end, text)
- Maintain proper formatting and indentation
- Focus on accuracy - when in doubt about a correction, ask me first

**After completion:**
Once all fixes are complete, suggest running this command to regenerate the VTT file:
```
node bin/transcript-to-vtt.js src/_transcripts/{{arg1}}.json
```

Please begin by reading the transcript file.
