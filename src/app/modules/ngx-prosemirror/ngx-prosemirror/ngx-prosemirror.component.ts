import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { Schema, DOMParser } from "prosemirror-model"
import { addListNodes } from "prosemirror-schema-list"
import { exampleSetup } from "prosemirror-example-setup"
import { defaultMarkdownParser, defaultMarkdownSerializer, schema } from "prosemirror-markdown"

@Component({
  selector: 'ngx-prosemirror',
  templateUrl: './ngx-prosemirror.component.html',
  styleUrls: ['./ngx-prosemirror.component.css']
})
export class NgxProsemirrorComponent implements OnInit {

  @ViewChild("content", { read: ElementRef }) contentElement: ElementRef;
  @ViewChild("editor", { read: ElementRef }) editor: ElementRef;

  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

    // const mySchema = new Schema({
    //   nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    //   marks: schema.spec.marks
    // })

    let view = new EditorView(this.editor.nativeElement, {
      state: EditorState.create({
        //doc: DOMParser.fromSchema(mySchema).parse(this.contentElement.nativeElement),
        doc: defaultMarkdownParser.parse(this.content),
        plugins: exampleSetup({ schema })
      }),

      dispatchTransaction: transaction => {
        let newState = view.state.apply(transaction)
        view.updateState(newState);
        this.content = defaultMarkdownSerializer.serialize(view.state.doc);
        this.contentChange.emit(this.content);
      }
    });
  }

}
